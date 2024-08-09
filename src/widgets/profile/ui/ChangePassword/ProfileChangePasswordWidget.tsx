import { Typography } from "@mui/material";
import { useState } from "react";

import { ProfileChangePasswordForm } from "@/features/profile";
import { StatusesList } from "@/shared/ui/Status/consts";
import { Status } from "@/shared/ui/Status/Status";

import { ChangePasswordForm, ChangePasswordHeader, ChangePasswordWrapper } from "./ProfileChangePasswordWidget.styled";

export function ProfileChangePasswordWidget({ userId }: { userId: string }) {
  const [isSuccess, setIsSuccess] = useState(false);

  const onSuccess = () => {
    setIsSuccess(true);
    setTimeout(() => {
      setIsSuccess(false);
    }, 5000);
  };

  return (
    <ChangePasswordWrapper>
      <ChangePasswordHeader>
        <Typography variant="h3">Смена пароля</Typography>
        {isSuccess && <Status status={StatusesList.SUCCESS} title="Успешно" />}
      </ChangePasswordHeader>
      <ChangePasswordForm>
        <ProfileChangePasswordForm userId={userId} onSuccess={onSuccess} />
      </ChangePasswordForm>
    </ChangePasswordWrapper>
  );
}
