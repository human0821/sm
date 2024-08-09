import { AuthHeaderEntity } from "@/entities/auth/header/ui/AuthHeaderEntity";
import { AuthLoginForm } from "@/features/auth/login";

export function AuthLoginAddProfileWidget() {
  return (
    <>
      <AuthHeaderEntity title="Добавить пользователя" props={{ marginBottom: "16px" }} />
      <AuthLoginForm />
    </>
  );
}
