import { styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const DialogWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 300px;
  padding: 19px 20px;
  h3 {
    ${mediaQueryHelp({
      fontSize: { xs: "0.875rem", s: "1.125rem", m: "1.25rem", l: "1.5rem" },
    })}
  }
  ${mediaQueryHelp({
    width: { s: "393px", m: "536px", l: "624px", xl: "671px" },
    padding: { s: "35px 30px", m: "44px 33px", xl: "44px 63px" },
    gap: { l: "17px" },
  })}
`;

export const DialogIcon = styled("div")`
  width: 56px;
  height: 56px;
  ${mediaQueryHelp({
    width: { s: "64px", m: "72px", l: "100px", xl: "140px" },
    height: { s: "64px", m: "72px", l: "100px", xl: "140px" },
  })}
  margin-bottom: 30px;
  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export const DialogFooter = styled("div")`
  width: 100%;
  display: flex;
  column-gap: 10px;
  margin-top: 30px;
  & > * {
    flex: 1;
  }
  > button {
    height: 48px;
    padding: 8px 7px;
    min-width: 126px;
    font-size: 1rem;
    ${mediaQueryHelp({
      height: { s: "64px" },
      minWidth: { s: "162px" },
      fontSize: { m: "1.125rem" },
    })}
  }
`;
