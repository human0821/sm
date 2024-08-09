import { Typography } from "@mui/material";

import { ManagerInfoEntity } from "@/entities/manager";
import { ManagerFeedbackButton } from "@/features/manager";

import { ManagerInfoWrapper, ManagerInfo, ManagerWrapper } from "./ProfileManagerWidget.styled";

export function ProfileManagerWidget({ manager }: { manager?: StoreUser.Manager | null }) {
  return (
    <ManagerWrapper>
      <Typography variant="h3">Менеджер</Typography>
      {manager && (
        <ManagerInfoWrapper>
          <ManagerInfo>
            <ManagerInfoEntity manager={manager} />
          </ManagerInfo>
          <ManagerFeedbackButton />
        </ManagerInfoWrapper>
      )}
    </ManagerWrapper>
  );
}
