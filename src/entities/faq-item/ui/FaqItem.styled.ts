import { styled } from "@mui/material";

import { Functions, Fonts } from "@/app/styles/";

export const ButtonsWrapper = styled("div")`
  display: flex;
  gap: 16px;
  justify-content: flex-end;
`;

export const Answer = styled("div")`
  font-size: 0.75rem;
  line-height: 1.125rem;
  letter-spacing: 0.01em;

  ${Functions.mediaQueryHelp({
    fontSize: { s: "1rem", l: "1.25rem", xxl: "1.5rem" },
    lineHeight: { s: "1.5rem", l: "1.875rem", xxl: "2.25rem" },
  })}
`;

export const Question = styled("div")`
  letter-spacing: 0.01em;
  font-size: 0.875rem;
  line-height: 1.3125rem;
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};

  ${Functions.mediaQueryHelp({
    margin: { m: "10px 0" },
    fontSize: { s: "1rem", m: "1.125rem", l: "1.25rem", xxl: "1.5rem" },
    lineHeight: { s: "1.5rem", m: "1.6875rem", l: "1.875rem", xxl: "2.25rem" },
  })}
`;
