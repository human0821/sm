import { Box, Tooltip } from "@mui/material";

import { BellIcon } from "@/assets/icons";
import { LayoutHeaderButton } from "@/shared/ui/Layout/Header/Button/LayoutHeaderButton";

export function LayoutHeaderNotificationsEntity() {
  return (
    <Tooltip title="Уведомления">
      <Box height={"100%"}>
        <LayoutHeaderButton count={25}>
          <BellIcon />
        </LayoutHeaderButton>
      </Box>
    </Tooltip>
  );
}
