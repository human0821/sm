import { styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const Grid = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  > div {
    &:nth-of-type(1) {
      ${mediaQueryHelp({ width: { xxl: "560px" } })}
    }
    &:nth-of-type(2) {
      ${mediaQueryHelp({ width: { xxl: "444px" } })}
    }
  }
  ${mediaQueryHelp({
    gridTemplateColumns: { l: "1fr 1fr" },
    display: { xxl: "flex !important" },
  })}
`;

export const BlockWrapper = styled("div")`
  position: relative;
  flex-shrink: 0;
  overflow: hidden;
  button {
    font-size: 1.125rem;
  }
  h3 {
    font-size: 1.25rem;
    ${mediaQueryHelp({ fontSize: { m: "1.5rem" } })}
  }
`;

export const LoaderWrapper = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 80px - 60px - 32px - 35px - 38px - 40px - 60px);
`;

export const BreadcrumbsWrapper = styled("div")`
  position: relative;
  left: -15px;
  li:nth-of-type(1),
  li:nth-of-type(2),
  li:nth-of-type(3) {
    display: none;
    ${mediaQueryHelp({ display: { m: "block" } })}
  }
  li:nth-of-type(4) {
    transform: rotate(180deg);
    ${mediaQueryHelp({ transform: { m: "rotate(0deg)" } })}
  }
  ${mediaQueryHelp({ left: { m: "0" } })}
`;
