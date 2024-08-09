import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

import { Colors, Transitions, Functions, Fonts } from "@/app/styles";

export const MuiSwitch: {
  defaultProps?: ComponentsProps["MuiSwitch"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiSwitch"];
  variants?: ComponentsVariants<Theme>["MuiSwitch"];
} = {
  styleOverrides: {
    root: ({ theme }) => ({
      width: 50,
      height: 26,
      padding: 0,
      "& .MuiSwitch-switchBase": {
        padding: 0,
        margin: 1,
        transitionDuration: Transitions.MEDIUM,
        "&.Mui-checked": {
          transform: "translateX(24px)",
          color: theme.palette.background.default,
          "& + .MuiSwitch-track": {
            backgroundColor: theme.palette.primary.main,
            opacity: 1,
            border: 0,
          },
          "&.Mui-disabled + .MuiSwitch-track": {
            opacity: 0.5,
          },
        },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
          border: `6px solid ${theme.palette.background.default}`,
        },
        "&.Mui-disabled .MuiSwitch-thumb": {
          color: Colors.GREY_PALE,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.7,
        },
      },
      "& .MuiSwitch-thumb": {
        boxShadow: "none",
        boxSizing: "border-box",
        width: 24,
        height: 24,
      },
      "& .MuiSwitch-track": {
        borderRadius: 13,
        backgroundColor: theme.palette.secondary.main,
        opacity: 1,
        transition: theme.transitions.create(["background-color"], { duration: Transitions.MEDIUM }),
      },
      "& + .MuiFormControlLabel-label": {
        fontSize: "0.875rem",
        fontFamily: Fonts.ROCK_STAR_SEMIBOLD,

        ...Functions.mediaQueryHelp({ fontSize: { s: "1rem", l: "1.125rem" } }),
      },
    }),
  },
};
