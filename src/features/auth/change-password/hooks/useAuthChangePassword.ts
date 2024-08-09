import { useErrorBoundary } from "react-error-boundary";
import { type SubmitHandler } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { useChangePasswordMutation } from "@/app/api/auth/api";
import Routes from "@/app/routes/consts/routes";
import store from "@/app/store";
import { logout } from "@/app/store/user/slice";
import ValidationErrors from "@/shared/consts/validationErrors";
import { getUserIdFromToken } from "@/shared/utils/apiHelpers";

export function useAuthChangePassword({
  setError,
}: {
  setError: React.Dispatch<React.SetStateAction<ChangePasswordForm["error"]>>;
}) {
  const [changePassword, { isLoading }] = useChangePasswordMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { showBoundary } = useErrorBoundary();

  const onSubmit: SubmitHandler<AuthChangePasswordForm> = (data) => {
    const { accessToken } = store.getState().user;
    const userId = getUserIdFromToken(accessToken);
    if (userId) {
      changePassword({
        userId,
        password: data.newPassword,
      })
        .unwrap()
        .then(() => {
          dispatch(logout());
          return navigate(Routes.AUTH_CHANGE_PASSWORD_SUCCESS_PAGE);
        })
        .catch((error: ApiErrorResponse) => {
          if (error?.status >= 500) {
            showBoundary({ code: 500 });
          }

          if (typeof error?.data?.detail === "object") {
            setError({
              name: "newPassword",
              error: { type: "custom", message: error.data.detail.password || ValidationErrors.UNEXPECTED },
            });
          }
        });
    } else {
      return setError({ name: "newPassword", error: { type: "custom", message: "Необходима повторная авторизация" } });
    }
  };
  return {
    onSubmit,
    isFetching: isLoading,
  };
}
