import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

export const MuiRadio: {
  defaultProps?: ComponentsProps["MuiRadio"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiRadio"];
  variants?: ComponentsVariants<Theme>["MuiRadio"];
} = {
  styleOverrides: {
    root: ({ theme }) => ({
      ".MuiSvgIcon-root": {
        width: 24,
        height: 24,
        boxShadow: `inset 0 0 0 1px ${theme.palette.text.divider}`,
        borderRadius: "100%",
        fill: "transparent",
        transform: "none",
      },

      "&.Mui-checked": {
        ".MuiSvgIcon-root": {
          boxShadow: `inset 0 0 0 7px ${theme.palette.primary.main}`,
        },

        "[data-testid='RadioButtonCheckedIcon']": {
          fill: theme.palette.background.default,
        },
      },
    }),
  },
};
