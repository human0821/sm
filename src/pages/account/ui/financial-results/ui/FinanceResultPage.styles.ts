import { styled } from "@mui/material";

import { Breakpoints } from "@/app/styles";
import { mediaQueryHelp } from "@/app/styles/functions";

export const FinanceResultPageWrap = styled("div")`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 944px;
  & > *:nth-child(1),
  & > *:nth-child(2) {
    min-width: 100%;
  }
  @media screen and (min-width: ${Breakpoints.DESKTOP}) {
    max-width: none;
    flex-wrap: nowrap;
    & > *:nth-child(1) {
      flex-grow: 1;
      min-width: 0;
      ${mediaQueryHelp({ width: { s: "100%", xl: "50%", xxl: "43%" } })}
    }
    & > *:nth-child(2) {
      flex-grow: 1;
      min-width: 0;
      ${mediaQueryHelp({ width: { s: "100%", xl: "50%", xxl: "57%" } })}
    }
  }
`;
