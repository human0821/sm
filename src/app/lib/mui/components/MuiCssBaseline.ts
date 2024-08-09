import type { ComponentsOverrides, ComponentsProps, Theme } from "@mui/material";

export const MuiCssBaseline: {
  defaultProps?: ComponentsProps["MuiCssBaseline"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiCssBaseline"];
} = {
  styleOverrides: {
    body: {
      lineHeight: "1.2",
    },
  },
};
