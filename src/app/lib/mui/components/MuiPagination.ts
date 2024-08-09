import type { ComponentsOverrides, Theme } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const MuiPagination: {
  styleOverrides?: ComponentsOverrides<Theme>["MuiPagination"];
} = {
  styleOverrides: {
    ul: {
      li: {
        div: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...mediaQueryHelp({ height: { xs: "32px", s: "40px", l: "48px", xxl: "60px" } }),
        },
        svg: {
          ...mediaQueryHelp({ height: { xs: 10, s: 14, l: 16 } }),
        },

        "&:first-of-type": {
          svg: {
            transform: "rotate(180deg)",
          },
        },
      },
    },
  },
};
