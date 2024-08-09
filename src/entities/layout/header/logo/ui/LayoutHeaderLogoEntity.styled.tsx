import { styled } from "@mui/material";
import { Link } from "react-router-dom";

import { Breakpoints, Transitions } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const LayoutHeaderLogoEntityWrapper = styled("div")<{ bgColor: string }>`
  background-color: ${(props) => props.bgColor};
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: auto;
  padding-right: 20px;
  height: 100%;
  border-right: 1px solid transparent;
  display: none;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    display: flex;
  }
  ${mediaQueryHelp({
    width: { xl: "266px" },
    paddingRight: { xl: "0" },
  })}
`;
export const LayoutHeaderLogoEntityLink = styled(Link)`
  line-height: 0;
`;

export const LayoutHeaderLogoEntityLogo = styled("img")`
  max-width: 150px;
  max-height: 40px;
  object-fit: contain;
  object-position: center;
  transition: opacity ${Transitions.SMALL};
  &:hover {
    opacity: 0.75;
  }
`;
