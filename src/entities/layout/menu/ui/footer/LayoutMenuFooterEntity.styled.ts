import { styled } from "@mui/material";

import Transitions from "@/app/styles/transitions";

export const LayoutMenuFooterEntityWrapper = styled("div")`
  margin: 0 20px;
  padding: 20px 0;
  max-height: 400px;
  border-top: 1px solid ${({ theme }) => theme.palette.primary.main};
`;

export const LayoutMenuFooterEntityAbout = styled("div")`
  font-size: 1rem;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const LayoutMenuFooterEntitySocial = styled("a")`
  line-height: 1;
  width: 40px;
  height: 40px;
  color: ${({ theme }) => theme.palette.primary.main};
  & > svg {
    width: 100%;
    height: 100%;
    & > rect {
      transition: fill ${Transitions.SMALL};
    }
  }
  &:hover {
    & > svg > rect {
      fill: ${({ theme }) => theme.palette.background.disabled};
    }
  }
  &:active {
    & > svg > rect {
      fill: ${({ theme }) => theme.palette.background.paper};
    }
  }
`;
