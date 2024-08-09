import type { ComponentsOverrides, Theme } from "@mui/material";

import { Fonts } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const MuiPaginationItem: {
  styleOverrides?: ComponentsOverrides<Theme>["MuiPaginationItem"];
} = {
  styleOverrides: {
    root: ({ theme }) => ({
      fontFamily: Fonts.ROCK_STAR_SEMIBOLD,
      lineHeight: "60px",

      ...mediaQueryHelp({
        width: { sx: 32, s: 40, l: 48, xxl: 60 },
        height: { sx: 32, s: 40, l: 48, xxl: 60 },
        fontSize: { sx: "0.75rem", s: "0.937rem", l: "1.125rem" },
        margin: { sx: "0 6px", s: "0 10px" },
      }),
      gap: 10,
      borderRadius: 10,

      "&.Mui-selected": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.background.default,

        "&:hover": {
          backgroundColor: theme.palette.primary.main,
        },
      },

      "&:hover": {
        backgroundColor: `${theme.palette.primary.main}40`,
      },
    }),
    page: ({ theme }) => ({
      backgroundColor: theme.palette.background.paper,
    }),
    ellipsis: ({ theme }) => ({
      pointerEvents: "none",
      position: "relative",
      backgroundColor: theme.palette.background.paper,
    }),
  },
};
