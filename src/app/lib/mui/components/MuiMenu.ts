import type { ComponentsOverrides, Theme } from "@mui/material";

import { Colors, Mixins } from "@/app/styles";

export const MuiMenu: {
  styleOverrides?: ComponentsOverrides<Theme>["MuiMenu"];
} = {
  styleOverrides: {
    paper: ({ theme }) => ({
      border: `1px solid ${theme.palette.background.paper}`,
      borderRadius: 15,
      boxShadow: `0px 0px 10px 0px ${Colors.GREY_MIDDLE}40`,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      backgroundColor: theme.palette.background.default,
      transform: "translateY(10px) !important",
      maxHeight: "327px !important",
    }),
    list: ({ theme }) => ({
      paddingTop: "0px",
      paddingBottom: "0px",
      display: "flex",
      flexDirection: "column",
      height: "100%",
      width: "100% !important",
      overflowY: "auto",
      overflowX: "hidden",

      ...Mixins.scrollbarObject({ color: theme.palette.primary.main }),
    }),
  },
};
