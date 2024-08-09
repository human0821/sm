import type { ComponentsOverrides, Theme } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const MuiAccordion: {
  styleOverrides?: ComponentsOverrides<Theme>["MuiAccordion"];
} = {
  styleOverrides: {
    root: ({ theme }) => ({
      boxShadow: "none",
      borderRadius: "20px !important",
      padding: 0,
      backgroundColor: theme.palette.background.paper,

      "&.outlined": {
        backgroundColor: theme.palette.background.default,
        outline: "1px transparent solid",

        ".MuiAccordionDetails-root": {
          paddingTop: "16px",
          ...mediaQueryHelp({ paddingTop: { m: "24px", xl: "30px" } }),
        },
      },

      "&.Mui-expanded": {
        marginTop: 0,

        "&.outlined": {
          outline: `1px ${theme.palette.primary.main}30 solid`,
        },
      },
      "&:before": {
        display: "none",
      },

      "&.Mui-disabled": {
        backgroundColor: theme.palette.background.paper,
      },
    }),
  },
};
