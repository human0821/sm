import { styled } from "@mui/material";

import { Mixins, Transitions, Breakpoints } from "@/app/styles";

const likeCommon = (isActive: boolean) => `
  font-size: 0.75rem;
  width: 55px;
  cursor: pointer;
  transition: opacity ${Transitions.MEDIUM} ease;
  &:hover {
    opacity: 0.65;
  }
  ${Mixins.iconSize(20)}
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    font-size: 1.125rem;
    margin-right: 10px;
    ${Mixins.iconSize(24)}
  }
  svg {
    fill: ${isActive ? "black" : "transparent"};
    path {
      stroke: ${isActive ? "white" : "black"};
    }
  }
`;

export const Count = styled("div")`
  margin-left: 8px;
`;

export const LikeWrapper = styled("div")<{ isActive: boolean }>`
  display: flex;
  align-items: center;
  ${(props) => likeCommon(props.isActive)}
`;
