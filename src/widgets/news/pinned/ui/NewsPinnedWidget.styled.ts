import { Typography, styled } from "@mui/material";

import { Breakpoints } from "@/app/styles/breakpoints";
import Fonts from "@/app/styles/fonts";

export const NewsPinnedWidgetTitle = styled(Typography)`
  font-family: ${Fonts.GEOLOGICA_MEDIUM};
  padding: 0;
  margin: 0 0 20px;
  font-size: 16px;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    font-size: 18px;
  }
  @media (min-width: ${Breakpoints.TABLET}) {
    padding: 20px;
    margin: 0;
  }
`;

export const NewsPinnedWidgetCarousel = styled("div")`
  & .swiper {
    padding: 0 0 48px;
    @media (min-width: ${Breakpoints.TABLET}) {
      padding: 0 20px 48px;
    }
  }
`;
