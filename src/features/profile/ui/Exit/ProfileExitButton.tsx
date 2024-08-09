import { ExitIcon } from "@/assets/icons";

import { ProfileExit } from "./ProfileExitButton.styled";
import { useProfileExit } from "../../hooks/useProfileExit";

export function ProfileExitButton() {
  const { showExitModal } = useProfileExit();
  return (
    <ProfileExit color="error" startIcon={<ExitIcon />} onClick={showExitModal}>
      Выйти из профиля
    </ProfileExit>
  );
}
