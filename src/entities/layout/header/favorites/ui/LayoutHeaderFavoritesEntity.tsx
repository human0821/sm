import { Box, Tooltip } from "@mui/material";

import { FavoriteIcon } from "@/assets/icons";
import { LayoutHeaderButton } from "@/shared/ui/Layout/Header/Button/LayoutHeaderButton";

export function LayoutHeaderFavoritesEntity() {
  return (
    <Tooltip title="ЭКП">
      <Box height={"100%"}>
        <LayoutHeaderButton count={12}>
          <FavoriteIcon />
        </LayoutHeaderButton>
      </Box>
    </Tooltip>
  );
}
