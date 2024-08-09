import type { ComponentsOverrides, ComponentsProps, Theme } from "@mui/material";

export const MuiSkeleton: {
  defaultProps?: ComponentsProps["MuiSkeleton"];
  styleOverrides?: ComponentsOverrides<Theme>["MuiSkeleton"];
} = {
  styleOverrides: {
    root: {
      transform: "none",
      borderRadius: "16px",
    },
  },
};
