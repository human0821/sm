import type { ComponentsOverrides, ComponentsProps, Theme } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const MuiCard: {
  defaultProps?: ComponentsProps["MuiCard"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiCard"];
} = {
  styleOverrides: {
    root: {
      borderRadius: "16px",
      boxShadow: "none",
      ...mediaQueryHelp({ padding: { xs: "20px", s: "30px" } }),
    },
  },
};
