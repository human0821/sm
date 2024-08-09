import { Helmet } from "react-helmet-async";

import { AuthResetPassword } from "@/widgets/auth/reset-password";

export function AuthResetPasswordPage() {
  return (
    <>
      <Helmet>
        <title>Восстановить пароль</title>
      </Helmet>
      <AuthResetPassword />
    </>
  );
}
