import { Stack, Typography } from "@mui/material";

import { AuthHeaderEntity } from "@/entities/auth/header/ui/AuthHeaderEntity";
import { AuthResetPasswordForm } from "@/features/auth/reset-password";

export function AuthResetPassword() {
  return (
    <>
      <Stack gap={2.5} marginBottom={"16px"}>
        <AuthHeaderEntity title="Восстановить пароль" />
        <Typography variant="subtitle1" color="secondary.main">
          Укажите адрес электронной почты, на который будет отправлено письмо с новым паролем
        </Typography>
      </Stack>
      <AuthResetPasswordForm />
    </>
  );
}
