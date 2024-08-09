import { Button, styled } from "@mui/material";

import { Transitions, Mixins } from "@/app/styles";

export const AuthProfileSelectDropdownWrapper = styled("div")`
  position: absolute;
  top: calc(100% + 10px);
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.palette.background.paper};
  background-color: ${({ theme }) => theme.palette.background.default};
  z-index: 1;
  border-radius: 16px;
  overflow: hidden;
  max-height: 365px;
`;

export const AuthProfileSelectDropdownOptions = styled("div")`
  overflow-y: auto;
  ${({ theme }) => Mixins.scrollbar({ color: theme.palette.primary.main })}
`;

export const AuthProfileSelectDropdownOption = styled("button")`
  position: relative;
  width: 100%;
  background-color: transparent;
  border: none;
  transition:
    background-color ${Transitions.SMALL},
    color ${Transitions.SMALL};
  cursor: pointer;
  padding: 10px;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 10px;
    right: 10px;
    height: 1px;
    background-color: ${({ theme }) => theme.palette.background.paper};
    transition: background-color ${Transitions.SMALL};
  }
  /* TODO: Уточнить стили наведения */
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.background.default};
    &::before {
      background-color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export const AddButton = styled(Button)`
  font-size: 1rem;
  margin: 8px 10px;
  height: 48px;
`;
