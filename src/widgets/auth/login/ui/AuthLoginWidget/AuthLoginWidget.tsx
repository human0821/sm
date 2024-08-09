import { Stack, Typography } from "@mui/material";

import Colors from "@/app/styles/colors";
import { AuthLoginForm } from "@/features/auth/login";

export function AuthLoginWidget() {
  return (
    <>
      <Stack gap={2.5}>
        <Typography variant="h3" align="center">
          Добро пожаловать!
        </Typography>
        <Typography variant="subtitle1" style={{ color: Colors.GREY_MAIN }}>
          Войдите, чтобы продолжить использование сервиса
        </Typography>
      </Stack>
      <AuthLoginForm canSelectProfile />
    </>
  );
}
