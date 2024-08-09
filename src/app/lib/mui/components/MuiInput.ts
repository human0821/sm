import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

import { Colors, Transitions } from "@/app/styles";

export const MuiInput: {
  defaultProps?: ComponentsProps["MuiInput"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiInput"];
  variants?: ComponentsVariants<Theme>["MuiInput"];
} = {
  defaultProps: {
    disableUnderline: true,
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      border: `1px solid ${theme.palette.text.divider}`,
      transition: `border-color ${Transitions.SMALL}`,
      borderRadius: "16px",
      padding: "0 18px",
      fontSize: "1.125rem",
      height: "64px",
      color: theme.palette.primary.main,

      ":hover": {
        borderColor: theme.palette.secondary.main,
      },
      "&.Mui-focused": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-disabled": {
        borderColor: theme.palette.text.divider,
        pointerEvents: "none",
      },
      "::placeholder": {
        color: theme.palette.secondary.main,
        opacity: 1,
      },
      "&.MuiInputBase-root": {
        marginTop: 0,
      },
      ".MuiSelect-select": { padding: 0 },
      ...(ownerState.error && {
        borderColor: Colors.RED_MAIN,
        color: Colors.RED_MAIN,
      }),
      "&:-webkit-autofill": {
        WebkitBackgroundClip: "text",
        ...(ownerState.error && {
          WebkitTextFillColor: theme.palette.background.paper,
        }),
      },
      "::-ms-reveal": {
        display: "none",
      },
    }),
  },
};
