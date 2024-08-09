import { styled, Typography } from "@mui/material";

import { Fonts } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const Wrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  gap: 12px;
`;

export const Label = styled(Typography)`
  font-size: 0.75rem;
  line-height: 0.75rem;
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  ${mediaQueryHelp({
    fontSize: { s: "0.875rem", m: "1rem", l: "1.125rem" },
    lineHeight: { s: "0.875rem", m: "1rem", l: "1.125rem" },
  })}
`;
