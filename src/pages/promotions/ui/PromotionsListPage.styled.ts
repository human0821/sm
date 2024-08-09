import { styled, Typography } from "@mui/material";

import { Colors, Fonts } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const LoaderWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 80px - 40px);
  height: 100%;
  position: absolute;
  top: 0;
`;

export const PromotionsList = styled("div")`
  display: grid;
  margin: 16px 0 24px;
  gap: 16px;
  grid-template-columns: 1fr;
  ${mediaQueryHelp({
    gridTemplateColumns: { s: "repeat(2, 1fr)", xl: "repeat(3, 1fr)" },
    gap: { s: "20px 16px", xl: "40px 20px" },
    margin: { s: "24px 0 40px", m: "64px 0 40px", l: "32px 0 60px", xl: "20px 0 60px", xxl: "40px 0 80px" },
  })}
`;

export const EmptyWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 80px - 40px);
  height: 100%;
`;

export const EmptyTitle = styled(Typography)`
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  color: ${Colors.GREY_MAIN};
  font-size: 1rem;
  ${mediaQueryHelp({
    fontSize: { s: "1.125rem", m: "1.25rem", l: "1.5rem", xxl: "2rem" },
  })}
`;
