import { styled } from "@mui/material";

import { Breakpoints, Colors } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const GrayText = styled("div")`
  color: ${({ theme }) => theme.palette.secondary.main};
  ${mediaQueryHelp({
    fontSize: ["0.875rem", "1", "1.125rem"],
  })}
`;

export const ColorCardSelect = styled("div")<{ $pointcolor: string; $isSelected?: boolean }>`
  display: flex;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  background: ${({ theme }) => theme.palette.background.default};
  border-radius: 12px;
  border: 2px solid ${({ $isSelected: isSelected, theme }) => (isSelected ? theme.palette.primary.main : Colors.GREY_PALE)};

  &:hover {
    border: 2px solid ${({ theme }) => theme.palette.primary.main};
  }

  &::after {
    content: "";
    width: 24px;
    height: 24px;
    border-radius: 50%;
    background: ${({ $pointcolor }) => $pointcolor};

    @media (min-width: ${Breakpoints.MOBILE_L}) {
      width: 32px;
      height: 32px;
    }
  }

  @media (min-width: ${Breakpoints.MOBILE_L}) {
    width: 64px;
    height: 64px;
    border-radius: 16px;
  }
`;

export const WrapImageUploader = styled("div")`
  display: grid;
  gap: 20px;

  grid-template-columns: repeat(1, 1fr);
  & > div:nth-child(3) {
    grid-column: auto;
  }

  @media (min-width: ${Breakpoints.MOBILE_L}) {
    grid-template-columns: repeat(2, 1fr);

    & > div:nth-child(3) {
      grid-column: 1 / 3;
    }
  }
`;
