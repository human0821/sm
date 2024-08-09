import { Helmet } from "react-helmet-async";

import { AuthSuccessMessage } from "@/entities/auth/success";
import { AuthResetPasswordResend } from "@/features/auth/reset-password";

export function AuthResetPasswordSuccessPage() {
  return (
    <>
      <Helmet>
        <title>Восстановить пароль</title>
      </Helmet>
      <AuthSuccessMessage title="Успешно" description="Временный пароль отправлен на указанную  почту" />
      <AuthResetPasswordResend />
    </>
  );
}
