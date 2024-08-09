import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

import { Fonts } from "@/app/styles";

export const MuiTooltip: {
  defaultProps?: ComponentsProps["MuiTooltip"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiTooltip"];
  variants?: ComponentsVariants<Theme>["MuiTooltip"];
} = {
  styleOverrides: {
    tooltip: ({ theme }) => ({
      backgroundColor: theme.palette.background.default,
      color: theme.palette.primary.main,
      fontSize: "0.75rem",
      lineHeight: "1rem",
      border: `1px solid ${theme.palette.background.paper}`,
      padding: "10px",
      borderRadius: "10px",
      fontFamily: Fonts.GEOLOGICA_REGULAR,
    }),
  },
};
