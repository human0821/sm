import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

export const MuiFormControl: {
  defaultProps?: ComponentsProps["MuiFormControl"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiFormControl"];
  variants?: ComponentsVariants<Theme>["MuiFormControl"];
} = {
  styleOverrides: {
    root: {
      position: "relative",
      border: "none !important",
      padding: "0 !important",
      background: "transparent !important",
    },
  },
};
