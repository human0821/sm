import { Helmet } from "react-helmet-async";

import { AuthChangePasswordForm } from "@/features/auth/change-password";

export function AuthChangePasswordPage() {
  return (
    <>
      <Helmet>
        <title>Смена пароля</title>
      </Helmet>
      <AuthChangePasswordForm />
    </>
  );
}
