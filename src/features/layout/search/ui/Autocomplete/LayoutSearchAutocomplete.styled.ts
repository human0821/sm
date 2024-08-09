import { IconButton, styled } from "@mui/material";
import { motion } from "framer-motion";

import { Fonts, Transitions, Functions } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const AutocompleteWrapper = styled("label")<{ active: number }>`
  position: relative;
  flex: 1;
  display: flex;
  gap: 7px;
  align-items: center;
  height: 48px;
  border-left: 1px solid transparent;
  z-index: 9999;
  padding: 20px;
  margin-top: 5px;
  transition: background-color ${Transitions.SMALL};
  cursor: text;
  user-select: none;
  svg {
    width: 16px;
    height: 16px;
    ${mediaQueryHelp({
      width: { s: "20px", xl: "28px" },
      height: { s: "20px", xl: "28px" },
    })}
  }
  ${(props) => `
    border-bottom: 1px solid ${props.theme.palette.primary.main}35;
    background-color: ${props.theme.palette.background.default};
  `}
  ${mediaQueryHelp({
    height: { s: "64px", xl: "80px" },
    gap: { xl: "20px" },
    padding: { xl: "0 16px 0 40px" },
    borderBottom: { xl: "1px solid transparent" },
    backgroundColor: { xl: "transparent" },
  })}
`;

export const AutocompleteInputWrapper = styled("div")`
  position: relative;
  flex: 1;
`;

export const AutocompleteInput = styled("input")`
  border: none;
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  position: relative;
  top: -1px;
  font-size: 0.875rem;
  outline: none;
  width: 100%;
  background: transparent;
  color: ${({ theme }) => theme.palette.primary.main};

  ${mediaQueryHelp({
    top: { s: "1px", xl: "1px" },
    fontSize: { s: "1rem", xl: "1.5rem" },
  })}
`;

export const AutocompleteInputPlaceholder = styled("div")`
  position: absolute;
  top: 6px;
  left: 0;
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  font-size: 0.875rem;
  pointer-events: none;
  white-space: nowrap;
  color: ${({ theme }) => theme.palette.background.paper};
  & > span {
    color: ${({ theme }) => theme.palette.primary.main};
  }
  ${mediaQueryHelp({
    top: { s: "7px", xl: "4px" },
    fontSize: { s: "1rem", xl: "1.5rem" },
  })}
`;

export const AutocompleteCloseButton = styled(IconButton)`
  color: ${({ theme }) => Functions.adjustColor(theme.palette.primary.main, -20)};
  &:disabled {
    pointer-events: none;
    color: ${({ theme }) => Functions.adjustColor(theme.palette.primary.main, -20)};
  }
  svg {
    width: 24px !important;
    height: 24px !important;
    ${mediaQueryHelp({
      width: { s: "28px !important", xl: "32px !important" },
      height: { s: "28px !important", xl: "32px !important" },
    })}
  }
`;

export const AutocompleteDropdown = styled(motion.div)`
  margin-right: -20px;
`;
