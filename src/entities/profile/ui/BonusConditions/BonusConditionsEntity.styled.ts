import { Card, styled } from "@mui/material";

import { Fonts } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const BonusConditions = styled(Card)`
  padding: 25px 20px;
  border-radius: 20px;
`;

export const BonusConditionsTitle = styled("div")`
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  ${mediaQueryHelp({ fontSize: { xs: "1rem", s: "1.125rem", m: "1.25rem", l: "1.5rem" } })}
`;

export const BonusConditionsText = styled("div")`
  ${mediaQueryHelp({ fontSize: { xs: "0.75rem", s: "0.875rem", m: "1rem", l: "1.125rem" } })}
  line-height: 1.6;
`;
