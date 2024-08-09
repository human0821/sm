import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

import { Colors, Transitions } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const MuiTextField: {
  defaultProps?: ComponentsProps["MuiTextField"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiTextField"];
  variants?: ComponentsVariants<Theme>["MuiTextField"];
} = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      backgroundColor: theme.palette.background.default,
      border: `1px solid ${theme.palette.text.divider}`,
      transition: `border-color ${Transitions.SMALL}`,
      borderRadius: "16px",
      minHeight: "64px",
      padding: "0 18px",
      ":hover": {
        borderColor: theme.palette.secondary.main,
      },
      ":focus-within": {
        borderColor: theme.palette.primary.main,
      },
      "&.Mui-disabled": {
        borderColor: theme.palette.text.divider,
        pointerEvents: "none",
      },
      ...(ownerState.error && {
        borderColor: Colors.RED_MAIN,
        color: Colors.RED_MAIN,
        ".Mui-error": {
          color: Colors.RED_MAIN,
        },
      }),
      fieldset: {
        border: "none",
        display: "none",
      },
      label: {
        fontSize: "0.875rem",
      },
      input: {
        ...mediaQueryHelp({ fontSize: { xs: "0.875rem", s: "1rem", l: "1.125rem" } }),
        paddingLeft: 0,
        paddingRight: 0,
        "&:-webkit-autofill": {
          WebkitBackgroundClip: "text",
          ...(ownerState.error && {
            WebkitTextFillColor: Colors.RED_MAIN,
          }),
        },
        "::-ms-reveal": {
          display: "none",
        },
      },
    }),
  },
};
