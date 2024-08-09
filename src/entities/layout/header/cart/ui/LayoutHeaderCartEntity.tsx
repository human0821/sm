import { Box, Tooltip } from "@mui/material";

import { CartIcon } from "@/assets/icons";
import { LayoutHeaderButton } from "@/shared/ui/Layout/Header/Button/LayoutHeaderButton";

export function LayoutHeaderCartEntity() {
  return (
    <Tooltip title="Корзина">
      <Box height={"100%"}>
        <LayoutHeaderButton count={150}>
          <CartIcon />
        </LayoutHeaderButton>
      </Box>
    </Tooltip>
  );
}
