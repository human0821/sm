import type { ComponentsOverrides, Theme } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const MuiAccordionDetails: {
  styleOverrides?: ComponentsOverrides<Theme>["MuiAccordionDetails"];
} = {
  styleOverrides: {
    root: {
      ...mediaQueryHelp({
        paddingLeft: ["20px", "30px"],
        paddingRight: ["20px", "30px"],
      }),
    },
  },
};
