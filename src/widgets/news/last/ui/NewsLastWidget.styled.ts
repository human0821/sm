import { Stack, Typography, styled } from "@mui/material";

import { Breakpoints } from "@/app/styles/breakpoints";
import Fonts from "@/app/styles/fonts";

export const NewsLastWidgetWrapper = styled(Stack)`
  padding: 0;
  @media (min-width: ${Breakpoints.TABLET}) {
    padding: 20px;
    padding-left: 20px;
    padding-right: 20px;
  }
  row-gap: 20px;
`;

export const NewsLastWidgetTitle = styled(Typography)`
  font-family: ${Fonts.GEOLOGICA_MEDIUM};
  font-size: 16px;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    font-size: 18px;
  }
`;

export const NewsLastWidgetEmpty = styled("div")`
  flex: 1;
  min-height: 200px;
`;
