import { css } from "styled-components";

export const fonts = css`
  @font-face {
    font-family: "Geologica Regular";
    src:
      local("Geologica Regular"),
      local("Geologica-Regular"),
      url("/fonts/Geologica-Regular.woff2") format("woff2"),
      url("/fonts/Geologica-Regular.woff") format("woff"),
      url("/fonts/Geologica-Regular.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Geologica Medium";
    src:
      local("Geologica Medium"),
      local("Geologica-Medium"),
      url("/fonts/Geologica-Medium.woff2") format("woff2"),
      url("/fonts/Geologica-Medium.woff") format("woff"),
      url("/fonts/Geologica-Medium.ttf") format("truetype");
    font-weight: 400;
    font-style: normal;
  }

  @font-face {
    font-family: "Geologica Semibold";
    src:
      local("Geologica SemiBold"),
      local("Geologica-SemiBold"),
      url("/fonts/Geologica-SemiBold.woff2") format("woff2"),
      url("/fonts/Geologica-SemiBold.woff") format("woff"),
      url("/fonts/Geologica-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
  }

  @font-face {
    font-family: "Rock Star Semibold";
    src:
      local("Rock Star SemiBold"),
      local("Rock-Star-SemiBold"),
      url("/fonts/RockStar-SemiBold.woff2") format("woff2"),
      url("/fonts/RockStar-SemiBold.woff") format("woff"),
      url("/fonts/RockStar-SemiBold.ttf") format("truetype");
    font-weight: 600;
    font-style: normal;
  }
`;

const enum Fonts {
  ROCK_STAR_SEMIBOLD = "Rock Star Semibold, sans-serif",
  GEOLOGICA_REGULAR = "'Geologica Regular', sans-serif",
  GEOLOGICA_MEDIUM = "'Geologica Medium', sans-serif",
  GEOLOGICA_SEMIBOLD = "'Geologica Semibold', sans-serif",
}

export default Fonts;
