import { styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const DashboardBannerWidgetWrapper = styled("div")`
  height: 223px;
  margin: 0 -20px;
  & .swiper {
    padding: 0 20px;
  }
  ${mediaQueryHelp({ height: { s: "100%" } })}
`;
