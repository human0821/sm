import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

import { Transitions, Mixins } from "@/app/styles";

export const MuiTabs: {
  defaultProps?: ComponentsProps["MuiTabs"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiTabs"];
  variants?: ComponentsVariants<Theme>["MuiTabs"];
} = {
  styleOverrides: {
    root: ({ theme }) => ({
      boxShadow: "none",
      backgroundColor: theme.palette.background.paper,
      borderRadius: "13px",
      transition: `all ${Transitions.MEDIUM}`,
    }),
    scroller: ({ theme }) => ({
      ...Mixins.scrollbarObject({ width: "3px", color: theme.palette.primary.main as any }),
      transition: `all ${Transitions.MEDIUM}`,
    }),
    flexContainer: {
      padding: 2,
      transition: `all ${Transitions.MEDIUM}`,
      justifyContent: "space-between",
    },
    indicator: {
      display: "none",
    },
    scrollButtons: {
      "&.Mui-disabled": {
        width: 0,
        transition: `width ${Transitions.MEDIUM}`,
      },
    },
  },
};
