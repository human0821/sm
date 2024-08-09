import { useState } from "react";

import { ChangePasswordForm } from "@/entities/auth/form";

import { useAuthChangePassword } from "../hooks/useAuthChangePassword";

export function AuthChangePasswordForm() {
  const [error, setError] = useState<ChangePasswordForm["error"]>();
  const { onSubmit, isFetching } = useAuthChangePassword({ setError });

  return <ChangePasswordForm onSubmit={onSubmit} isLoading={isFetching} error={error} showRules sx={{ gap: "27px" }} />;
}
