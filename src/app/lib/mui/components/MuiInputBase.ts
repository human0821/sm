import type { ComponentsOverrides, ComponentsProps, ComponentsVariants, Theme } from "@mui/material";

import { Mixins } from "@/app/styles";

export const MuiInputBase: {
  defaultProps?: ComponentsProps["MuiInputBase"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiInputBase"];
  variants?: ComponentsVariants<Theme>["MuiInputBase"];
} = {
  styleOverrides: {
    input: ({ theme }) => ({
      height: "100%",
      padding: 0,

      "&.Mui-disabled": {
        color: theme.palette.secondary.main,
        "-webkit-text-fill-color": theme.palette.secondary.main,
      },
    }),

    multiline: ({ theme }) => ({
      padding: "15px 18px 10px !important",
      height: "initial !important",
      ".MuiInputBase-inputMultiline": {
        ...Mixins.scrollbarObject({ color: theme.palette.primary.main }),
      },
    }),
  },
};
