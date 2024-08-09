import { styled } from "@mui/material";

import { Breakpoints, Colors, Fonts, Transitions } from "@/app/styles";

export const Answer = styled("div")`
  word-break: break-all;
`;

export const Percent = styled("div")`
  padding-left: 20px;
`;

export const DiscardText = styled("div")`
  user-select: none;
`;

export const DiscardAnswer = styled("div")`
  &:hover {
    text-decoration: underline;
  }
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  font-size: 0.875rem;
  display: inline-flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  user-select: none;
  margin-bottom: 15px;
  margin-top: 10px;
  svg {
    margin-top: -2px;
    width: 25px;
    height: 25px;
  }
  @media (min-width: ${Breakpoints.TABLET}) {
    font-size: 1rem;
  }
  @media (min-width: ${Breakpoints.TABLET_L}) {
    font-size: 1rem;
  }
  @media (min-width: ${Breakpoints.DESKTOP}) {
    font-size: 1.125rem;
  }
`;

export const Wrapper = styled("div")``;

export const Variants = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Variant = styled("div")<{ isAnswered: boolean }>`
  border: 1px solid ${({ theme }) => theme.palette.primary.main}40;
  ${(props) =>
    props.isAnswered
      ? `
    background-color: ${props.theme.palette.primary.main};
    color: ${Colors.WHITE};`
      : `
    background-color: ${props.theme.palette.background.paper};
    &:hover {
      background-color: ${props.theme.palette.primary.main};
      color: ${Colors.WHITE};
    }
  `}
  transition:
    background-color ${Transitions.SMALL} ease-in-out,
    color ${Transitions.SMALL} ease-in-out;
  display: flex;
  align-items: center;
  font-size: 0.75rem;
  padding: 20px;
  border-radius: 15px;
  cursor: pointer;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    font-size: 0.875rem;
  }
  @media (min-width: ${Breakpoints.TABLET}) {
    font-size: 1rem;
  }
  @media (min-width: ${Breakpoints.TABLET_L}) {
    font-size: 1.125rem;
  }
  > div:first-of-type {
    flex: 1;
  }
`;

export const FreeAnswer = styled("div")`
  margin-top: 20px;
  margin-bottom: -12px;
  font-size: 0.9rem;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const FreeAnswersWrapper = styled("div")`
  margin-top: 35px;
`;

export const FreeAnswersText = styled("div")`
  font: 1.125rem ${Fonts.ROCK_STAR_SEMIBOLD};
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    font-size: 1.25rem;
  }
  @media (min-width: ${Breakpoints.TABLET}) {
    font-size: 1.5rem;
  }
  @media (min-width: ${Breakpoints.TABLET_L}) {
    font-size: 2rem;
  }
  span {
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

export const Hide = styled("div")`
  height: 40px;
  margin-top: 35px;
  font-size: 0.875rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-top: 2px solid ${Colors.GREY_PALE};
  color: ${({ theme }) => theme.palette.secondary.main};
  user-select: none;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    font-size: 1.125rem;
  }
`;
