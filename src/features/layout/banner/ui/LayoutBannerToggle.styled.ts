import { styled } from "@mui/material";

import Transitions from "@/app/styles/transitions";

export const BannerToggleButton = styled("button")<{ active: number }>`
  width: 40px;
  height: 100%;
  background-color: ${({ theme }) => theme.palette.background.default}10;
  color: ${({ theme }) => theme.palette.background.default};
  cursor: pointer;
  border: none;
  &:hover {
    background-color: ${({ theme }) => theme.palette.background.default}20;
  }
  &:active {
    background-color: ${({ theme }) => theme.palette.background.default}25;
  }
  svg {
    transform: ${(props) => !props.active && "rotate(180deg)"};
    transition: transform ${Transitions.SMALL};
  }
`;
