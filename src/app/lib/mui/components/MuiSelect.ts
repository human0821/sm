import type { ComponentsOverrides, Theme } from "@mui/material";

import { Transitions } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const MuiSelect: {
  styleOverrides?: ComponentsOverrides<Theme>["MuiSelect"];
} = {
  styleOverrides: {
    icon: {
      right: 20,
      transition: `all ${Transitions.MEDIUM} ease-in-out`,
    },
    iconOpen: {
      top: "calc(50% - .55em)",
    },
    root: {
      ...mediaQueryHelp({
        fontSize: ["0.875rem", "1rem", "1rem", "1.125rem"],
      }),
    },
    select: { paddingLeft: 0 },
  },
};
