import { Card, styled } from "@mui/material";

import { Fonts } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const BonusWrapper = styled(Card)`
  padding: 25px 20px;
  border-radius: 20px;
  margin-bottom: 20px;
`;

export const BonusTitle = styled("div")`
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  margin-bottom: 16px;
  ${mediaQueryHelp({ fontSize: { xs: "1rem", s: "1.125rem", m: "1.25rem", l: "1.5rem" } })};
`;

export const BonusPrice = styled("div")`
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  display: flex;
  align-items: center;
  gap: 7px;

  span {
    ${mediaQueryHelp({ fontSize: { xs: "1.125rem", s: "1.25rem", m: "1.5rem", l: "2rem" } })}
  }

  svg {
    ${mediaQueryHelp({ width: { xs: "20px", s: "24px", l: "32px" }, height: { xs: "20px", s: "24px", l: "32px" } })}
  }
`;
