import type { ComponentsOverrides, Theme } from "@mui/material";

import { Colors, Transitions } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const MuiMenuItem: {
  styleOverrides?: ComponentsOverrides<Theme>["MuiMenuItem"];
} = {
  styleOverrides: {
    root: ({ theme }) => ({
      borderBottom: `1px solid ${theme.palette.background.paper}`,
      transition: `all ${Transitions.MEDIUM}`,
      padding: "9.5px 9.5px 9.5px 18px",
      ...mediaQueryHelp({
        fontSize: { xs: "0.875rem", s: "1rem", m: "1.125rem" },
      }),

      "&:last-of-type": {
        borderBottom: "none",
      },

      "&:hover": {
        background: Colors.SECTION_BACKGROUND,
      },

      ".MuiTypography-root": {
        fontSize: "1.125rem",
        lineHeight: "1.125rem",
        textOverflow: "ellipsis",
        overflow: "hidden",
      },

      "&.Mui-selected": {
        background: "transparent",
      },
    }),
  },
};
