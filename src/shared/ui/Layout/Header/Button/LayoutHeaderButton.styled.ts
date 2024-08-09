import { styled } from "@mui/material";

import { Breakpoints, Fonts, Transitions } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const LayoutHeaderButtonWrapper = styled("button")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  outline: none;
  border: none;
  border-left: 1px solid ${({ theme }) => theme.palette.primary.main}30;
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.primary.main}00;
  transition: background-color ${Transitions.SMALL};
  &:hover,
  &:focus {
    background-color: ${({ theme }) => theme.palette.primary.main}08;
  }
  &:active {
    background-color: ${({ theme }) => theme.palette.primary.main}10;
  }
  width: 54px;
  ${mediaQueryHelp({ width: { s: "64px", xl: "87px", xxl: "112px" } })}
`;

export const LayoutHeaderButtonContent = styled("div")`
  position: relative;
  width: 24px;
  height: 24px;
  & > svg {
    width: 100%;
    height: 100%;
  }
  ${mediaQueryHelp({
    width: { xl: "32px" },
    height: { xl: "32px" }
  })}
`;

export const LayoutHeaderButtonCount = styled("div")`
  position: absolute;
  top: -5px;
  right: -5px;
  width: 18px;
  height: 18px;
  border-radius: 9px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  border: 1px solid ${({ theme }) => theme.palette.background.default};
  color: ${({ theme }) => theme.palette.background.default};
  font-family: ${Fonts.GEOLOGICA_REGULAR};
  font-size: 0.5rem;
  line-height: 1rem;
  display: none;
  @media (min-width: ${Breakpoints.DESKTOP}) {
    display: block;
  }
`;
