import { Typography } from "@mui/material";

import { Colors } from "@/app/styles";

export function IsActive({ children, isActive }: IsActive) {
  const colors = {
    active: Colors.GREEN_MAIN,
    inactive: Colors.RED_MAIN,
    between: Colors.BLACK_MAIN,
  };

  return (
    <Typography fontSize={"inherit"} color={colors[isActive]}>
      {children}
    </Typography>
  );
}
