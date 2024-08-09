import { Stack, Typography } from "@mui/material";
import { useSnackbar } from "notistack";
import { useNavigate, useSearchParams } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";
import { ArrowRightIcon } from "@/assets/icons";
import { Variants } from "@/shared/consts/variants";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";

import { AuthResetPasswordResendButton, AuthResetPasswordResendTimer } from "./AuthResetPasswordResend.styled";
import { useAuthChangePassword } from "../hooks/useAuthResetPassword";
import { useAuthChangePasswordTimer } from "../hooks/useAuthResetPasswordTimer";

export function AuthResetPasswordResend() {
  const { onSubmit: resendEmail, isFetching } = useAuthChangePassword();
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const limit = 120;
  const { timer, setTimerDate } = useAuthChangePasswordTimer({ limit });

  const parseTimerToString = () => {
    const minutes = Math.floor(timer / 60);
    const seconds = `0${timer % 60}`.slice(-2);
    return `${minutes}:${seconds}`;
  };

  const resetTimer = async () => {
    if (typeof email === "string") {
      await resendEmail({ email });

      setTimerDate(new Date().getTime() - 1000);
    } else {
      enqueueSnackbar("Не указан Email", {
        variant: Variants.ERROR,
      });
    }
  };

  const resendLink = () => {
    if (timer < limit) {
      return (
        <Typography variant="subtitle2" color="secondary.main">
          Отправить пароль повторно можно будет через:{" "}
          <AuthResetPasswordResendTimer>{parseTimerToString()}</AuthResetPasswordResendTimer>
        </Typography>
      );
    } else {
      return <AuthResetPasswordResendButton onClick={resetTimer}>Отправить пароль повторно</AuthResetPasswordResendButton>;
    }
  };

  const redirectToLogin = () => navigate(Routes.AUTH_LOGIN_PAGE);

  return (
    <Stack gap={1.25}>
      <ButtonLoading
        sx={{ justifyContent: "space-between" }}
        variant="contained"
        endIcon={<ArrowRightIcon />}
        loading={isFetching}
        onClick={redirectToLogin}>
        Войти
      </ButtonLoading>
      {resendLink()}
    </Stack>
  );
}
