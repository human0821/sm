import { ArrowRightAltOutlined } from "@mui/icons-material";
import { Box, Button, Stack } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export function GoToControlModeButton({ disabled = false }) {
  return (
    <Button variant="contained" disabled={disabled}>
      <Stack
        width={"100%"}
        gap={2}
        sx={mediaQueryHelp({ justifyContent: ["center", "space-between"] })}
        alignItems={"center"}
        direction={"row"}>
        <Box sx={mediaQueryHelp({ fontSize: ["0.875rem", "1rem", "1.125rem"] })}>
          Перейти в режим <Box component={"br"} sx={mediaQueryHelp({ display: ["block", "none"] })} /> управления
        </Box>
        <ArrowRightAltOutlined sx={mediaQueryHelp({ display: ["none", "block"] })} />
      </Stack>
    </Button>
  );
}
