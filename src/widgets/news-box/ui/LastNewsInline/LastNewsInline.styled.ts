import { styled } from "@mui/material";

import { Fonts, Breakpoints } from "@/app/styles";

export const LastNewsTabletText = styled("div")`
  margin-bottom: 15px;
  font-size: 1.125rem;
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    font-size: 1.25rem;
  }
  @media (min-width: ${Breakpoints.TABLET_L}) {
    font-size: 24px;
  }
`;

export const LastNewsTabletWrapper = styled("div")`
  display: block;
  margin: 20px 0;
  margin-top: 50px;
  & .swiper {
    padding-bottom: 48px;
  }
  @media (min-width: ${Breakpoints.DESKTOP}) {
    display: none;
  }
`;
