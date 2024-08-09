import { styled, Typography } from "@mui/material";

import { Colors, Fonts } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const BoxFieldsWrapper = styled("div")<{ background?: string }>`
  background: ${({ background }) => background || Colors.WHITE};
  border-radius: 15px;
  padding: 20px;
`;
export const BoxFieldsHead = styled("div")`
  display: flex;
  justify-content: space-between;
  margin-bottom: 40px;
`;
export const BoxFieldsTitle = styled(Typography)`
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  font-size: 0.875rem;
  line-height: 0.896875rem;
  ${mediaQueryHelp({
    fontSize: { s: "1.125rem", xxl: "1.25rem" },
    lineHeight: { s: "1.153125rem", xxl: "1.28125rem" },
  })}
`;
export const BoxFieldsList = styled("div")`
  display: grid;
  gap: 40px 20px;
  grid-template-columns: 1fr;
  ${mediaQueryHelp({
    gridTemplateColumns: { m: "1fr 1fr" },
  })}
`;
