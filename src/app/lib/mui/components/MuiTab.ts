import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

import { Transitions, Fonts } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const MuiTab: {
  defaultProps?: ComponentsProps["MuiTab"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiTab"];
  variants?: ComponentsVariants<Theme>["MuiTab"];
} = {
  styleOverrides: {
    root: ({ theme }) => ({
      boxShadow: "none",
      flexGrow: 1,
      fontFamily: Fonts.GEOLOGICA_MEDIUM,
      textTransform: "initial",
      lineHeight: 1.25,
      color: theme.palette.primary.main,
      borderRadius: "13px",
      position: "relative",
      zIndex: 2,
      transition: `all ${Transitions.MEDIUM}`,
      minWidth: "66px",
      maxWidth: "none",
      minHeight: "44px",
      fontSize: "14px",
      padding: "4px 30px",
      ...mediaQueryHelp({
        fontSize: { s: "18px" },
        minHeight: { s: "56px" },
        padding: { s: "4px 55px" },
      }),
      "&:hover": {
        backgroundColor: `${theme.palette.primary.main}40`,
        "@media (hover: none)": {
          backgroundColor: "transparent",
        },
      },
      "&:not(:first-of-type)": {
        "&::before": {
          content: "\x22\x22",
          position: "absolute",
          top: "50%",
          left: 0,
          transform: "translateY(-50%)",
          height: "50%",
          width: "1px",
          borderRadius: "1px",
          backgroundColor: `${theme.palette.primary.main}40`,
          transition: `all ${Transitions.MEDIUM}`,
        },
        "&.Mui-selected::before": {
          backgroundColor: theme.palette.primary.main,
        },
      },
      "&.Mui-selected": {
        color: theme.palette.background.default,
        borderBottom: "none",
        height: "calc(100% - 4px)",
        backgroundColor: theme.palette.primary.main,
        borderRadius: "13px",
        transition: `all ${Transitions.MEDIUM}`,

        "&:hover": {
          backgroundColor: `${theme.palette.primary.main}100`,
        },
      },
      "&.Mui-disabled": {
        color: `${theme.palette.primary.main}40`,
      },
      "> span": {
        transition: `all ${Transitions.MEDIUM}`,
      },
    }),
  },
};
