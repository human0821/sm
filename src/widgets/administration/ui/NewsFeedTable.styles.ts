import { styled } from "@mui/material";

import { Colors } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

const paddings = { xs: "16px", s: "20px", xxl: "40px" };

const borderRadiusMixin = (radius: string, direction: "left" | "right" = "left") => `
  border-top-${direction}-radius: ${radius};
  border-bottom-${direction}-radius: ${radius};
`;

export const NewsFeedTable = styled("table")`
  width: 100%;
  min-width: 1000px;
  border-radius: 16px;
  border-spacing: 0 20px;
  ${mediaQueryHelp({ fontSize: { xs: "0.75rem", s: "0.875rem", xxl: "1rem" } })}

  td,
  th {
    padding: 16px;
    ${mediaQueryHelp({ padding: { s: 20 } })};
  }
`;

export const NewsFeedTableHead = styled("thead")`
  background: ${Colors.YELLOW_MAIN};

  th {
    ${mediaQueryHelp({ height: { xs: "48px", s: "56px", m: "60px", l: "64px" } })};
    text-align: left;
    font-weight: 400;

    &:first-child {
      ${mediaQueryHelp({ paddingLeft: paddings })};
      ${borderRadiusMixin("16px")};
    }

    &:last-child {
      ${mediaQueryHelp({ paddingRight: paddings })};
      ${borderRadiusMixin("16px", "right")};
    }
  }
`;

export const NewsFeedTableBodyRow = styled("tr")`
  position: relative;
  height: 99px;
  ${mediaQueryHelp({ height: { s: "107px", xl: "124px", xxl: "140px" } })};

  & td:first-child a {
    position: absolute;
    inset: 0;
    border-radius: 16px;
    z-index: 1;
  }

  svg {
    &:hover {
      color: black !important;
    }
  }

  svg,
  button {
    position: relative;
    z-index: 2;
  }
`;

export const NewsFeedTableBody = styled("tbody")`
  td {
    vertical-align: top;
  }

  tr {
    background: ${({ theme }) => theme.palette.background.paper};

    & td:first-child {
      ${mediaQueryHelp({ paddingLeft: paddings })};
      ${borderRadiusMixin("16px")};
    }

    & td:last-child {
      ${mediaQueryHelp({ paddingRight: paddings })};
      ${borderRadiusMixin("16px", "right")};
    }
  }
`;

export const NewsFeedImageTable = styled("div")`
  ${mediaQueryHelp({ height: { xs: "67px", xxl: "100px" } })};
  border-radius: 10px;
  overflow: hidden;

  &:nth-child(3) {
    display: none;
  }
`;

export const ButtonIcon = styled("td")`
  svg {
    cursor: pointer;
    height: 24px;
    width: 24px;
  }
  vertical-align: top;
  padding-left: 0 !important;
  padding-right: 0 !important;
`;
