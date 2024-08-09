import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

export const MuiFormLabel: {
  defaultProps?: ComponentsProps["MuiFormLabel"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiFormLabel"];
  variants?: ComponentsVariants<Theme>["MuiFormLabel"];
} = {
  styleOverrides: {
    root: {
      fontSize: "0.875rem",
    },
  },
};
