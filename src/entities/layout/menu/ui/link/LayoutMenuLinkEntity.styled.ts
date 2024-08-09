import { styled } from "@mui/material";
import { NavLink } from "react-router-dom";

import { Colors, Transitions } from "@/app/styles";

export const LayoutMenuLinkEntityWrapper = styled(NavLink)`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 10px 20px;
  column-gap: 8px;
  font-size: 1rem;
  line-height: 110%;
  color: inherit;
  text-decoration: none;
  background-color: transparent;
  transition: background-color ${Transitions.SMALL};
  &:hover,
  &:active {
    background-color: ${({ theme }) => theme.palette.primary.main}10;
  }
  &.active {
    & > span:first-of-type {
      color: ${({ theme }) => theme.palette.background.default};
      background-color: ${({ theme }) => theme.palette.primary.main};
      border-color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export const LinkIcon = styled("span")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.palette.background.default};
  border-radius: 8px;
  border: 1px solid ${Colors.GREY_PALE3};
  transition: all ${Transitions.SMALL};
  & > svg {
    width: 24px;
    height: 24px;
  }
`;
