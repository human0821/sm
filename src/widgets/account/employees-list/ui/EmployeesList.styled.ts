import { styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const LayoutWrapper = styled("div")`
  position: relative;
`;

export const LoaderWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: calc(100vh - 80px - 40px - 300px);
  height: 100%;
  position: absolute;
  top: 0;
  background-color: ${({ theme }) => theme.palette.background.default};
`;

export const PaginationWrapper = styled("div")`
  a {
    font-size: 0.75rem;
    ${mediaQueryHelp({ fontSize: { s: "0.9375rem", l: "1.125rem", xxl: "1.5rem" } })}
  }
`;
