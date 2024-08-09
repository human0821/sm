import { Helmet } from "react-helmet-async";

import { AuthLoginWidget } from "@/widgets/auth/login";

export function AuthLoginPage() {
  return (
    <>
      <Helmet>
        <title>Авторизация</title>
      </Helmet>
      <AuthLoginWidget />
    </>
  );
}
