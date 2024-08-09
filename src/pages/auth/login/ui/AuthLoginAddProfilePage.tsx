import { Helmet } from "react-helmet-async";

import { AuthLoginAddProfileWidget } from "@/widgets/auth/login";

export function AuthLoginAddProfilePage() {
  return (
    <>
      <Helmet>
        <title>Добавить пользователя</title>
      </Helmet>
      <AuthLoginAddProfileWidget />
    </>
  );
}
