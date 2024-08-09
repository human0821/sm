import type { PaletteOptions } from "@mui/material";

import Colors from "@/app/styles/colors";

declare module "@mui/material/styles" {
  interface TypeText {
    primary: string;
    secondary: string;
    disabled: string;
    divider: string;
  }
  interface Palette {
    text: TypeText;
  }
  interface TypeColor {
    Darkest?: string;
    Darker?: string;
    Dark?: string;
    Base?: string;
    Light?: string;
    Lighter?: string;
    Lightest?: string;
    White?: string;
  }

  interface TypeBackground {
    opposite: string;
    disabled: string;
  }
}

export const palette: PaletteOptions = {
  primary: {
    main: Colors.BLACK_MAIN,
  },
  secondary: {
    main: Colors.GREY_MAIN,
  },
  background: {
    default: Colors.WHITE,
    opposite: Colors.BLACK_MAIN,
    paper: Colors.DIVIDER,
    disabled: Colors.DISABLED,
  },
  text: {
    primary: Colors.BLACK_MAIN,
    secondary: Colors.GREY_MAIN,
    disabled: Colors.DISABLED,
    divider: Colors.DIVIDER,
  },
};
