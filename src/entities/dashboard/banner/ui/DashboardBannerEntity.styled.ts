import { Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

import { Transitions, Mixins } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const DashboardBannerEntityWrapper = styled("div")`
  position: relative;
  border-radius: 20px;
  overflow: hidden;
  height: 100%;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0) 100%);
    transition: opacity ${Transitions.SMALL};
  }
  &:hover {
    &::after {
      opacity: 0.8;
    }
  }
`;

export const DashboardBannerEntityTitle = styled(Typography)`
  position: absolute;
  line-height: 1;
  z-index: 1;
  color: ${({ theme }) => theme.palette.background.default};
  bottom: 30px;
  left: 30px;
  right: 30px;
  ${(props) => props.theme.breakpoints.up("xl")} {
    bottom: 40px;
    left: 40px;
    right: 40px;
  }
  & > a {
    color: inherit;
  }
  ${mediaQueryHelp({ fontSize: { xs: "1.125rem", s: "2rem", xl: "2.5rem" } })}
`;

export const DashboardBannerEntityLink = styled(Link)`
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const DashboardBannerEntityPlay = styled("button")`
  ${Mixins.buttonClear()}
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.background.default}50;
  transition: background-color ${Transitions.SMALL};
  width: 75px;
  height: 75px;
  & > svg {
    width: 36px;
    height: 36px;
  }
  ${(props) => props.theme.breakpoints.up("xl")} {
    width: 100px;
    height: 100px;
    & > svg {
      width: 48px;
      height: 48px;
    }
  }
  &:hover {
    background-color: ${({ theme }) => theme.palette.background.default};
  }
  &:active {
    background-color: ${({ theme }) => theme.palette.background.default}90;
  }
`;

export const DashboardBannerEntityVideoPreview = styled("video")`
  max-width: 100%;
  max-height: 100%;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;
