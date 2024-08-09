import { styled } from "@mui/material";

import { Breakpoints } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const NewsCreatedWidgetButtons = styled("div")`
  display: flex;
  margin-top: 30px;
  gap: 20px;
  justify-content: center;

  ${mediaQueryHelp({ flexWrap: { xs: "wrap", s: "nowrap" } })}

  & > a {
    flex-grow: 1;

    ${mediaQueryHelp({ width: { xs: "100%", s: "256px", l: "330px" } })}
  }

  @media screen and (min-width: ${Breakpoints.MOBILE_L}) {
    justify-content: space-between;
    flex-wrap: nowrap;
  }
`;

export const NewsCreatedCard = styled("div")`
  max-width: 100%;
  margin: 0 auto;
  ${mediaQueryHelp({
    width: { xs: "100%", s: "392px", m: "352px", xxl: "434px" },
    marginBottom: { xs: "20px", s: "40px", m: "60px", xl: "80px" },
    height: { xs: "230px", l: "260px", xxl: "240px" },
  })}
`;
