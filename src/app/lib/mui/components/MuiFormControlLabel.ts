import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

export const MuiFormControlLabel: {
  defaultProps?: ComponentsProps["MuiFormControlLabel"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiFormControlLabel"];
  variants?: ComponentsVariants<Theme>["MuiFormControlLabel"];
} = {
  styleOverrides: {
    label: ({ theme }) => ({
      "&.Mui-disabled": {
        color: theme.palette.primary.main,
      },
    }),
  },
};
