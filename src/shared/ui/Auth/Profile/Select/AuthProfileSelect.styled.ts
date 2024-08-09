import { styled } from "@mui/material";

import { Transitions, Functions } from "@/app/styles";
import { ChevronSelectIcon } from "@/assets/icons";

export const AuthProfileSelectWrapper = styled("div")`
  position: relative;
  z-index: 2;
`;

export const AuthProfileSelectHeader = styled("button")<{ active: number }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  overflow: hidden;
  height: 64px;
  border-radius: 16px;
  border: 2px solid ${({ theme }) => theme.palette.primary.main};
  transition:
    background-color ${Transitions.SMALL},
    border-color ${Transitions.SMALL},
    color ${Transitions.SMALL};
  padding: 0 20px 0 10px;
  cursor: pointer;
  svg {
    transition: transform ${Transitions.SMALL};
  }

  ${(props) =>
    props.active
      ? `
      background-color: ${props.theme.palette.background.default};
      color: ${props.theme.palette.primary.main};
      svg {
        transform: rotate(180deg);
      }
    `
      : `
      background-color: ${props.theme.palette.primary.main};
      color: ${props.theme.palette.background.default};
      &:hover {
        background-color: ${Functions.adjustColor(props.theme.palette.primary.main, -20)};
      }
    `}
`;

export const AuthProfileSelectHeaderProfile = styled("div")`
  overflow: hidden;
`;

export const AuthProfileSelectHeaderChevron = styled(ChevronSelectIcon)`
  flex-shrink: 0;
`;
