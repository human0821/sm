import { Stack, Typography } from "@mui/material";

import Colors from "@/app/styles/colors";
import { AuthSuccessIcon } from "@/assets/icons";

export function AuthSuccessMessage(props: { title: string; description?: string }) {
  return (
    <Stack
      sx={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}>
      <AuthSuccessIcon />
      <Typography variant="h3" align="center" mt={2.5}>
        {props.title}
      </Typography>
      <Typography variant="subtitle1" mt={2.5} style={{ color: Colors.GREY_MAIN }}>
        {props.description}
      </Typography>
    </Stack>
  );
}
