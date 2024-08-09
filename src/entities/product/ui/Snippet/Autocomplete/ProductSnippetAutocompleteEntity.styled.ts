import { IconButton, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

import { Functions, Mixins, Transitions, Colors } from "@/app/styles";

const { mediaQueryHelp } = Functions;

export const AutocompleteWrapper = styled("div")`
  position: relative;
  display: flex;
  column-gap: 10px;
  padding: 20px;
  transition: background-color ${Transitions.SMALL};
  &:hover,
  &:focus-within {
    background-color: ${Colors.SECTION_BACKGROUND};
  }
  ${mediaQueryHelp({ columnGap: { s: "20px" } })}
`;

export const AutocompleteThumb = styled("div")`
  flex-shrink: 0;
  border-radius: 10px;
  overflow: hidden;
  background-color: ${Colors.SECTION_BACKGROUND};
  img {
    padding: 14px;
    object-fit: contain !important;
  }
  width: 60px;
  height: 60px;
  ${mediaQueryHelp({
    width: { s: "80px", m: "100px" },
    height: { s: "80px", m: "100px" },
  })}
`;

export const AutocompleteInfo = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  & > h3,
  & > h6 {
    line-height: 102%;
  }
`;

export const AutocompleteTitle = styled(Typography)`
  max-width: 100%;
  font-size: 0.75rem !important;
  ${Mixins.textEllipsis()};
  ${mediaQueryHelp({ fontSize: { s: "1.125rem !important", m: "1.25rem !important", xl: "1.5rem !important" } })}
`;

export const AutocompleteStatus = styled(Typography)<{ active: number }>`
  color: ${(props) => (props.active ? props.theme.palette.secondary.main : Colors.ERROR)};
  margin-top: 10px;
  font-size: 0.625rem !important;
  ${mediaQueryHelp({ fontSize: { s: "0.875rem !important", m: "1rem !important" } })}
`;

export const AutocompleteCost = styled(Typography)`
  margin-top: 14px;
  font-weight: 600;
  font-size: 0.75rem !important;
  ${mediaQueryHelp({
    fontSize: { s: "1.125rem !important", m: "1.25rem !important", xl: "1.5rem !important" },
    marginTop: { s: "24px" },
  })}
`;

export const AutocompleteChevron = styled(IconButton)`
  position: relative;
  width: 40px;
  height: 40px;
  margin: -8px -8px 0 0;
  padding: 4px;
  color: ${({ theme }) => theme.palette.primary.main};
  & > svg {
    width: 32px;
    height: 32px;
  }
`;

export const AutocompleteLink = styled(Link)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  outline: none;
`;
