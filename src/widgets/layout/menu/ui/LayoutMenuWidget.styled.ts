import { Card, styled } from "@mui/material";

import { Breakpoints, Functions } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";
import { LogoutIcon as Icon } from "@/assets/icons";

export const LayoutMenuWidgetWrapper = styled(Card)<{ isMobile?: boolean; bgImage?: string }>`
  border-radius: 0;
  z-index: 1200;
  position: fixed;
  ${(props) => `
    top: ${props.isMobile ? "0" : "auto"};
    width: ${props.isMobile ? "100%" : "266px"};
  `}
  ${mediaQueryHelp({ height: { xs: "100%", xl: "calc(100% - 80px)" } })}
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  max-height: calc(100vh);

  background-image: ${(props) => props.bgImage && `url("${props.bgImage}")`};
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: ${Breakpoints.TABLET}) {
    ${(props) => props.isMobile && "width: 474px;"}
  }

  @media (min-width: ${Breakpoints.MOBILE_S}) {
    padding: 0;
  }

  @media (min-width: ${Breakpoints.DESKTOP}) {
    border-right: 1px solid ${({ theme }) => theme.palette.primary.main}30;
  }
`;

export const LayoutMenuWidgetMenuList = styled("div")`
  overflow-y: auto;
  flex: 1;
  padding: 10px 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const LayoutMenuWidgetMobileHeader = styled("div")`
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const LayoutMenuMobileClose = styled("div")`
  height: inherit;
  width: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => Functions.adjustColor(theme.palette.primary.main, 20)};
  cursor: pointer;

  svg {
    width: 13px;
    height: 13px;
    color: ${({ theme }) => theme.palette.background.default};
  }
`;

export const LayoutMenuMobileLogo = styled("div")`
  flex: 1;
  img {
    margin-top: 7px;
    margin-left: 20px;
    max-height: 28px;
  }
`;

export const LayoutMenuMobileLogout = styled("div")`
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.palette.background.default};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-right: 20px;
  cursor: pointer;
`;

export const LogoutIcon = styled(Icon)`
  fill: ${({ theme }) => theme.palette.primary.main};
`;
