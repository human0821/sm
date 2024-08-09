import { useErrorBoundary } from "react-error-boundary";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { useCheckEmailMutation, useLoginMutation } from "@/app/api/auth/api";
import { useGetUserMutation } from "@/app/api/user/api";
import Routes from "@/app/routes/consts/routes";
import { logout, setUser } from "@/app/store/user/slice";
import LocalStorage from "@/shared/consts/localStorage";
import ValidationErrors from "@/shared/consts/validationErrors";
import { VALIDATION_PATTERN_EMAIL } from "@/shared/consts/validationPatterns";
import { decodeJWTToken } from "@/shared/utils/apiHelpers";

export function useAuthLogin({ isNeedGetEmail }: { isNeedGetEmail?: boolean }) {
  const [checkEmail, { isLoading: checkEmailLoading }] = useCheckEmailMutation();
  const [login, { isLoading: loginLoading }] = useLoginMutation();
  const [getUser, { isLoading: getUserLoading }] = useGetUserMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const profiles: StoreUser.User[] = JSON.parse(localStorage.getItem(LocalStorage.PROFILES) || "[]");
  const { showBoundary } = useErrorBoundary();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    getValues,
    setValue,
    watch,
    clearErrors,
  } = useForm<AuthLoginForm>({
    defaultValues: {
      email: isNeedGetEmail ? localStorage.getItem(LocalStorage.LOGIN_EMAIL) || "" : "",
      password: "",
    },
    mode: "onChange",
  });

  watch((values) => {
    localStorage.setItem(LocalStorage.LOGIN_EMAIL, values.email || "");
  });

  const validationRules = {
    email: {
      required: ValidationErrors.REQUIRED,
      pattern: {
        value: VALIDATION_PATTERN_EMAIL,
        message: ValidationErrors.EMAIL,
      },
    },
    password: {
      required: ValidationErrors.REQUIRED,
    },
  };

  const onSubmit: SubmitHandler<AuthLoginForm> = async (data) => {
    await checkEmail({ email: data.email })
      .unwrap()
      .catch((error: ApiErrorResponse) => {
        if (error?.status >= 500) {
          showBoundary({ code: 500 });
        }

        if (typeof error?.data?.detail === "string") {
          setError("email", { type: "custom", message: error.data.detail });
        } else {
          setError("email", { type: "custom", message: ValidationErrors.UNEXPECTED });
        }
        throw new Error(JSON.stringify(error));
      });

    // Получаем декодированный токен
    const accessDecodedToken = await login(data)
      .unwrap()
      .then((payload) => {
        return decodeJWTToken(payload.accessToken);
      })
      .catch((error: ApiErrorResponse) => {
        if (error?.status >= 500) {
          showBoundary({ code: 500 });
        }

        if (typeof error?.data?.detail === "string") {
          setError("password", { type: "custom", message: error.data.detail });
        } else {
          setError("password", { type: "custom", message: ValidationErrors.UNEXPECTED });
        }
        throw new Error(JSON.stringify(error));
      });

    // Если пользователь восстанавливал пароль, отправляем его на страницу создания нового пароля
    if (accessDecodedToken?.is_active === false) {
      return navigate(Routes.AUTH_CHANGE_PASSWORD_PAGE);
    }

    // Если нет, получаем пользователя и направляем в админку
    await getUser()
      .unwrap()
      .then((user) => {
        dispatch(setUser(user));
        navigate(user.lastLink || Routes.DASHBOARD_PAGE, { state: { from: location } });
      })
      .catch((error: ApiErrorResponse) => {
        dispatch(logout());

        if (error?.status >= 500) {
          showBoundary({ code: 500 });
        }

        if (typeof error?.data?.detail === "string") {
          setError("email", { type: "custom", message: error.data.detail });
        } else {
          setError("email", { type: "custom", message: ValidationErrors.UNEXPECTED });
        }
      });
  };

  const isFetching = checkEmailLoading || loginLoading || getUserLoading;

  const isSubmitDisabled = !isValid && !(errors.email?.type === "custom" || errors.password?.type === "custom");

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    validationRules,
    isFetching,
    isSubmitDisabled,
    profiles,
    getValues,
    setValue,
    clearErrors,
  };
}
