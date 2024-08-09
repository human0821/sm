import { useErrorBoundary } from "react-error-boundary";
import { type SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useResetPasswordMutation } from "@/app/api/auth/api";
import Routes from "@/app/routes/consts/routes";
import LocalStorage from "@/shared/consts/localStorage";
import ValidationErrors from "@/shared/consts/validationErrors";
import { VALIDATION_PATTERN_EMAIL } from "@/shared/consts/validationPatterns";

import { LOCAL_STORAGE_TIMER } from "./useAuthResetPasswordTimer";

export function useAuthChangePassword() {
  const navigate = useNavigate();
  const [resetPassword, { isLoading }] = useResetPasswordMutation();
  const { showBoundary } = useErrorBoundary();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    setError,
    watch,
  } = useForm<AuthResetPasswordForm>({
    defaultValues: {
      email: localStorage.getItem(LocalStorage.LOGIN_EMAIL) || "",
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
  };

  const onSubmit: SubmitHandler<AuthResetPasswordForm> = (data) => {
    return resetPassword(data)
      .unwrap()
      .then(() => {
        localStorage.setItem(LOCAL_STORAGE_TIMER, String(new Date().getTime() - 1000));
        navigate(`${Routes.AUTH_RESET_PASSWORD_SUCCESS_PAGE}?email=${data.email}`);
      })
      .catch((error: ApiErrorResponse) => {
        if (error?.status >= 500) {
          return showBoundary({ code: 500 });
        }

        if (typeof error?.data?.detail === "string") {
          setError("email", { type: "custom", message: error.data.detail });
        } else {
          setError("email", { type: "custom", message: ValidationErrors.UNEXPECTED });
        }
      });
  };

  const isSubmitDisabled = !isValid && !(errors.email?.type === "custom");

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    validationRules,
    isSubmitDisabled,
    isFetching: isLoading,
  };
}
