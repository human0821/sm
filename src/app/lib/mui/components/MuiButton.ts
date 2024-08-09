import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

import Colors from "@/app/styles/colors";
import Fonts from "@/app/styles/fonts";
import { mediaQueryHelp } from "@/app/styles/functions";

export const MuiButton: {
  defaultProps?: ComponentsProps["MuiButton"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiButton"];
  variants?: ComponentsVariants<Theme>["MuiButton"];
} = {
  defaultProps: {
    size: "large",
  },
  styleOverrides: {
    root: ({ ownerState, theme }) => ({
      height: "64px",
      lineHeight: 1.2,
      borderRadius: "16px",
      fontSize: "1rem",
      fontFamily: Fonts.ROCK_STAR_SEMIBOLD,
      textTransform: "initial",

      ...mediaQueryHelp({ l: "1.125rem" }),
      ...(ownerState.variant === "contained" && {
        boxShadow: "none",
        ":hover": {
          boxShadow: "none",
          backgroundColor: theme.palette.primary.main,
        },
        "&.Mui-focusVisible": {
          boxShadow: "none",
        },
      }),
      ...(ownerState.variant === "outlined" && {
        borderWidth: "2px",
        ...(ownerState.color === "error" && {
          borderColor: Colors.ERROR,
          color: Colors.ERROR,

          "&:hover": {
            borderColor: Colors.ERROR,
          },
        }),

        ":hover": {
          borderWidth: "2px",
        },
        "&.Mui-focusVisible": {
          borderWidth: "none",
        },
      }),
      ...(ownerState.size === "large" && {
        height: 64,
        ...mediaQueryHelp({
          fontSize: { xs: "0.875rem", s: "1rem", m: "1.125rem" },
        }),
      }),
      ...(ownerState.size === "medium" && {
        height: 56,
      }),
      ...(ownerState.size === "small" && {
        height: 44,
        borderRadius: 10,
        whiteSpace: "nowrap",
        "> span": {
          transform: "translateY(1px)",
        },

        ".MuiButton-startIcon svg": {
          width: 24,
          height: 24,
        },
      }),
      "&.Mui-disabled": {
        backgroundColor: theme.palette.background.disabled,
        color: Colors.TEXT_DISABLED,
      },
      "& > .MuiButton-endIcon, & > .MuiButton-startIcon": {
        ":first-of-type": {
          fontSize: "2rem",
        },
      },
    }),
  },
};
