import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

export const MuiInputLabel: {
  defaultProps?: ComponentsProps["MuiInputLabel"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiInputLabel"];
  variants?: ComponentsVariants<Theme>["MuiInputLabel"];
} = {
  defaultProps: {
    shrink: true,
  },
  styleOverrides: {
    root: ({ theme }) => ({
      top: "-24px",
      cursor: "pointer",
      transform: "none",

      "&.Mui-disabled": {
        opacity: 1,
        color: theme.palette.secondary.main,
      },
    }),
  },
};
