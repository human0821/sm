import { styled, Link, Typography } from "@mui/material";

import { Breakpoints, Functions } from "@/app/styles";
import { ChevronIcon } from "@/assets/icons";

export const BreadcrumbsWrapper = styled("div")`
  margin-bottom: 35px;

  nav,
  p {
    font-size: 12px;
    line-height: 12px;

    @media (min-width: ${Breakpoints.MOBILE_L}) {
      font-size: 16px;
      line-height: 16px;
    }
    @media (min-width: ${Breakpoints.TABLET_L}) {
      font-size: 18px;
      line-height: 18px;
    }
  }
  nav ol {
    flex-wrap: nowrap;
  }
  nav li:last-of-type {
    display: grid;
    grid-template-columns: auto 1fr;

    p {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
  }
`;

export const BreadcrumbsLink = styled(Link)`
  color: ${({ theme }) => theme.palette.primary.main}60 !important;
`;

export const BreadcrumbsTitle = styled(Typography)`
  color: ${({ theme }) => theme.palette.primary.main} !important;
`;

export const BreadcrumbsChevron = styled(ChevronIcon)`
  color: ${({ theme }) => theme.palette.primary.main}60 !important;
  width: 24px;
  height: 24px;

  ${Functions.mediaQueryHelp({ width: { s: 32 }, height: { s: 32 } })}
`;
