import type { Palette } from "@mui/material";
import type { TypographyOptions, TypographyStyleOptions } from "@mui/material/styles/createTypography";

import { Colors, Fonts } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const typography: TypographyOptions | ((palette: Palette) => TypographyOptions) = {
  fontFamily: Fonts.GEOLOGICA_REGULAR,

  h1: {
    fontFamily: Fonts.ROCK_STAR_SEMIBOLD,
    fontSize: "2rem",

    ...mediaQueryHelp<TypographyStyleOptions>({
      fontSize: ["1.125rem", "1.25rem", "1.5rem", "2rem"],
    }),
  },
  h2: {
    fontFamily: Fonts.ROCK_STAR_SEMIBOLD,
    fontSize: "1.7rem",
  },
  h3: {
    fontFamily: Fonts.ROCK_STAR_SEMIBOLD,
    fontSize: "1.5rem",

    ...mediaQueryHelp<TypographyStyleOptions>({
      fontSize: ["1rem", "1.125rem", "1.25rem", "1.5rem", "1.5rem", "1.5rem"],
    }),
  },
  h4: {
    fontFamily: Fonts.ROCK_STAR_SEMIBOLD,
    fontSize: "1.25rem",

    ...mediaQueryHelp<TypographyStyleOptions>({
      fontSize: { s: "0.875rem", xs: "1rem", m: "1.25rem" },
    }),
  },
  h5: {
    fontFamily: Fonts.ROCK_STAR_SEMIBOLD,
    fontSize: "1.125rem",
  },

  h6: {
    fontFamily: Fonts.ROCK_STAR_SEMIBOLD,
    fontSize: "1rem",
  },

  body1: {
    fontSize: "1.25rem",
  },
  body2: {
    fontFamily: Fonts.ROCK_STAR_SEMIBOLD,
    ...mediaQueryHelp<TypographyStyleOptions>({
      fontSize: ["0.875rem", "1.125rem"],
    }),
  },

  subtitle1: {
    fontSize: "1.125rem",
    lineHeight: 1.4,
  },
  subtitle2: {
    fontSize: "0.875rem",
    lineHeight: 1.4,
  },

  gray: {
    color: Colors.GREY_MAIN,
    fontSize: "1.125rem",
  },
};
