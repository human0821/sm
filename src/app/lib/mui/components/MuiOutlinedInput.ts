import type { ComponentsOverrides, Theme } from "@mui/material";

import { Colors, Transitions, Functions } from "@/app/styles";

export const MuiOutlinedInput: {
  styleOverrides?: ComponentsOverrides<Theme>["MuiOutlinedInput"];
} = {
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      backgroundColor: theme.palette.background.default,
      border: `1px solid ${theme.palette.text.divider}`,
      transition: `border-color ${Transitions.SMALL}`,
      borderRadius: "16px",
      height: "100%",
      flexGrow: 1,
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
        backgroundColor: theme.palette.background.paper,
      },
      textarea: {
        ...Functions.mediaQueryHelp({ fontSize: { xs: "0.875rem", s: "1rem", l: "1.125rem" } }),
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
        padding: 0,
        "&:-webkit-autofill": {
          WebkitBackgroundClip: "text",
          ...(ownerState.error && {
            WebkitTextFillColor: Colors.RED_MAIN,
          }),
        },
        "::-ms-reveal": {
          display: "none",
        },

        "&.MuiSelect-select": { padding: 0 },
        ".MuiSelect-select": { padding: 0 },
      },
      select: {
        padding: 0,
      },
    }),
  },
};
