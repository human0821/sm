import { styled } from "@mui/material";

import Fonts from "@/app/styles/fonts";
import { buttonClear } from "@/app/styles/mixins";
import Transitions from "@/app/styles/transitions";

export const AuthResetPasswordResendTimer = styled("span")`
  color: ${({ theme }) => theme.palette.primary.main};
  font-family: ${Fonts.GEOLOGICA_MEDIUM};
`;

export const AuthResetPasswordResendButton = styled("button")`
  ${buttonClear()}
  position: relative;
  align-self: flex-start;
  font-size: 0.875rem;
  font-family: ${Fonts.GEOLOGICA_MEDIUM};
  letter-spacing: -0.01em;
  color: ${({ theme }) => theme.palette.primary.main};

  &::after {
    content: "";
    position: absolute;
    bottom: 1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${({ theme }) => theme.palette.primary.main};
    transition: opacity ${Transitions.SMALL};
  }
  &:hover {
    &::after {
      opacity: 0;
    }
  }
`;
