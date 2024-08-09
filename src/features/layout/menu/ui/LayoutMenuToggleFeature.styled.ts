import { styled } from "@mui/material";

import { Transitions, Functions } from "@/app/styles";

export const LayoutMenuToggleFeatureButton = styled("button")<{ active: number }>`
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

export const LayoutMenuToggleFeatureMobileWrapper = styled("div")`
  width: 56px;
  height: 100%;
  background-color: ${({ theme }) => Functions.adjustColor(theme.palette.primary.main, 20)};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
