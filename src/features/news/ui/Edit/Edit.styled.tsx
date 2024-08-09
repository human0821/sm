import { styled } from "@mui/material";

import { Transitions, Breakpoints, Mixins } from "@/app/styles";

export const EditWrapper = styled("div")`
  display: flex;
  align-items: center;
  cursor: pointer;
  @media (min-width: ${Breakpoints.MOBILE_L}) {
    margin-right: 5px;
    ${Mixins.iconSize(24)}
  }
  color: ${({ theme }) => theme.palette.secondary.main};
  &:hover {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  svg {
    path {
      transition: color ${Transitions.MEDIUM} ease;
      color: currentColor;
    }
  }
`;
