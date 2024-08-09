import { styled } from "@mui/material";

import { Fonts } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const PictureWrapper = styled("div")`
  border-radius: 20px;
  overflow: hidden;
  height: 180px;
  margin-bottom: 16px;
  ${mediaQueryHelp({
    height: { m: "267px" },
    marginBottom: { s: "20px" },
  })}
`;

export const PromotionContent = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
  ${mediaQueryHelp({
    gap: { s: "10px" },
    marginBottom: { s: "20px" },
  })}
  p {
    &:nth-child(1) {
      font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
      font-size: 1rem;
      line-height: 1.2rem;
      ${mediaQueryHelp({
        fontSize: { s: "1.125rem", l: "1.25rem", xxl: "1.5rem" },
        lineHeight: { s: "1.35rem", l: "1.28125rem", xxl: "1.5375rem" },
      })}
    }
    &:nth-child(2) {
      color: ${({ theme }) => theme.palette.secondary.main};
      font-family: ${Fonts.GEOLOGICA_REGULAR};
      font-size: 0.75rem;
      line-height: 0.9375rem;
      ${mediaQueryHelp({
        fontSize: { s: "0.875rem", l: "1rem" },
        lineHeight: { s: "1.09375rem", l: "1.25rem" },
      })}
    }
  }
`;

export const Period = styled("div")`
  display: flex;
  font-size: 24px;
  align-items: center;
  gap: 4px;
  ${mediaQueryHelp({
    gap: { s: "8px", m: "20px" },
  })}
  p {
    font-size: 0.75rem;
    line-height: 0.75rem;
    ${mediaQueryHelp({
      fontSize: { s: "0.875rem", l: "1.125rem" },
      lineHeight: { s: "0.875rem", l: "1.125rem" },
    })}
  }
`;

const sizeOutline = { m: "18px", l: "24px" };

export const OutlineWrapper = styled("div")`
  display: flex;
  align-items: center;
  gap: 4px;
  ${mediaQueryHelp({
    gap: { s: "10px" },
  })}
  svg {
    ${mediaQueryHelp({
      width: sizeOutline,
      height: sizeOutline,
    })}
  }
`;
