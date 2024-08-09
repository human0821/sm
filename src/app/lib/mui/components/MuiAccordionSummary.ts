import type { ComponentsOverrides, Theme } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const MuiAccordionSummary: {
  styleOverrides?: ComponentsOverrides<Theme>["MuiAccordionSummary"];
} = {
  styleOverrides: {
    root: ({ theme }) => ({
      ...mediaQueryHelp({
        paddingLeft: ["20px", "30px"],
        paddingRight: ["20px", "30px"],
        minHeight: ["64px !important", "72px !important", "92px !important"],
      }),
      width: "calc(100% + 2px)",
      borderRadius: 20,
      backgroundColor: theme.palette.background.paper,
      transform: "translate(-1px, -1px)",
    }),
  },
};
