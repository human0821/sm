import { styled } from "@mui/material";

import { Mixins } from "@/app/styles";
import Fonts from "@/app/styles/fonts";

export const DropdownWrapper = styled("div")`
  position: absolute;
  top: 100%;
  left: -2px;
  width: calc(100% + 3px);
  max-height: 70vh;
  border: 1px solid ${({ theme }) => theme.palette.background.paper};
  background-color: ${({ theme }) => theme.palette.background.default};
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  overflow-y: auto;
  ${({ theme }) => Mixins.scrollbar({ color: theme.palette.primary.main })}
`;

export const DropdownList = styled("div")`
  & > *:not(:last-of-type) {
    border-bottom: 1px solid ${({ theme }) => theme.palette.background.paper};
  }
`;

export const DropdownEmpty = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 256px;
  font-size: 1.5rem;
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  color: ${({ theme }) => theme.palette.secondary.main};
`;
