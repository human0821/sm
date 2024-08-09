import { styled } from "@mui/material";
import { motion } from "framer-motion";

import { Transitions } from "@/app/styles";

export const Button = styled("button")<{ fullColor?: boolean }>`
  border-radius: 50%;
  border: none;
  width: 34px;
  height: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  transition: all ${Transitions.MEDIUM} ease-in-out;
  cursor: pointer;
  padding: 5px;

  svg {
    color: ${({ theme, fullColor }) => (fullColor ? theme.palette.primary.main : `${theme.palette.primary.main}50`)};
    transition: all ${Transitions.MEDIUM} ease-in-out;
    max-width: 24px;
    max-height: 24px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.main}20;

    svg {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }

  &:disabled {
    pointer-events: none;
  }
`;

export const IconWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
