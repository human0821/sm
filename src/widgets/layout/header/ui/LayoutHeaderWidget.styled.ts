import { styled } from "@mui/material";

import { Breakpoints } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const LayoutHeaderWidgetWrapper = styled("div")<{ bgImage?: string }>`
  position: fixed;
  z-index: 100;
  width: 100vw;
  height: 64px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${({ theme }) => `${theme.palette.primary.main}35`};
  background-color: ${({ theme }) => theme.palette.background.default};
  background-image: ${(props) => props.bgImage && `url("${props.bgImage}")`};
  background-repeat: no-repeat;
  background-size: cover;
  @media (min-width: ${Breakpoints.DESKTOP}) {
    height: 80px;
  }
`;

export const LayoutHeaderWidgetBanner = styled("div")`
  position: absolute;
  z-index: 5;
  bottom: -25px;
  left: 50%;
  top: 100px;
  transform: translateX(-50%);
  button {
    width: 30px;
    height: 30px;
    ${mediaQueryHelp({ width: { s: "50px" }, height: { s: "50px" } })}
  }
  ${mediaQueryHelp({ top: { xl: "auto" } })}
`;

export const LayoutHeaderStretchBlock = styled("div")`
  flex: 1;
`;

export const LayoutHeaderSearchWrapper = styled("div")`
  position: fixed;
  top: 59px;
  left: 0;
  width: 100vw;
`;
