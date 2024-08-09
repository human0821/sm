import { ThemeProvider, createTheme } from "@mui/material/styles";
import React from "react";

import components from "./components";
import { useThemePalette } from "./hooks/useThemePalette";
import themeConfig from "./theme";

export const AppThemeProvider: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const theme = createTheme({
    palette: themeConfig.palette,
    typography: themeConfig.typography,
    breakpoints: themeConfig.breakpoints,
    components,
  });
  useThemePalette(theme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
