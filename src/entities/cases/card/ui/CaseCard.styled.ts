import { Card, styled } from "@mui/material";

import { Colors, Fonts } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";
import { scrollbar } from "@/app/styles/mixins";

const cardHeight = { xs: "750px", s: "850px" };
export const PrivilegesWrapper = styled("div")`
  max-height: calc(${cardHeight.xs} - 280px);
  overflow-y: auto;
  padding-right: 10px;
  ${({ theme }) => scrollbar({ color: theme.palette.primary.main })}
  ${mediaQueryHelp({ maxHeight: { s: `calc(${cardHeight.s} - 370px)` } })}

  ul {
    margin: 0;
    margin-left: 20px;
    padding: 0;
  }
  li {
    font-size: 0.75rem;
    line-height: 1.1rem;
    letter-spacing: 0.01em;
    ${mediaQueryHelp({
      fontSize: { s: "1rem", m: "1.125rem" },
      lineHeight: { s: "1.6rem", m: "1.8rem" },
    })}

    &:last-of-type {
      margin-bottom: 0;
    }
  }
`;

export const PrivilegesTitle = styled("div")<{ blackTitle?: boolean }>`
  ${mediaQueryHelp({ fontSize: { xs: "0.875rem", s: "1.125rem" } })}
  display: flex;
  align-items: end;

  color: ${(props) => (props.blackTitle ? props.theme.palette.primary.main : props.theme.palette.secondary.main)};
  > span {
    &:nth-of-type(2) {
      display: inline-flex;
      flex: 1;
      box-sizing: border-box;
      position: relative;
      top: -4px;
      padding-left: 20px;
      ${mediaQueryHelp({ margin: { xs: "0 3px", m: "0 6px" } })}
      border-bottom: 2px dashed ${({ theme }) => theme.palette.secondary.main};
    }
    &:nth-of-type(3) {
      color: ${({ theme }) => theme.palette.primary.main};
    }
  }
`;

export const CardWrapper = styled(Card)<{ current?: boolean }>`
  height: ${cardHeight.xs};
  ${mediaQueryHelp({ height: cardHeight })}
  border: 5px solid ${(props) => (props.current ? Colors.BLUE_LIGHT : "transparent")};
`;

export const CardTitle = styled("div")`
  font-family: ${Fonts.ROCK_STAR_SEMIBOLD};
  font-size: 32px;

  ${mediaQueryHelp({
    fontSize: { xs: "1.125rem", s: "1.25rem", l: "1.5rem", xl: "2rem" },
  })};
`;

export const CardLine = styled("div")`
  border-top: 1px solid ${Colors.DIVIDER};
`;
