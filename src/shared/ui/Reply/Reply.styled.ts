import { styled } from "@mui/material";

import { Transitions, Breakpoints, Mixins } from "@/app/styles";

export const ReplyWrapper = styled("div")`
  transition: color ${Transitions.MEDIUM} ease;
  display: flex;
  align-items: center;
  ${Mixins.iconSize(15)}
  font-size: 0.75rem;
  color: ${({ theme }) => theme.palette.secondary.main};
  cursor: pointer;
  margin: 10px 0;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    margin-right: 40px;
    ${Mixins.iconSize(22)}
  }
  svg {
    path {
      stroke: currentColor;
    }
  }
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
    svg {
      path {
        transition: color ${Transitions.MEDIUM} ease;
        color: ${({ theme }) => theme.palette.primary.main};
      }
    }
  }
`;

export const ReplyText = styled("div")`
  margin-left: 8px;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    font-size: 1.125rem;
  }
`;
