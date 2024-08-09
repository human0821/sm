import { styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const CardWrapper = styled("div")`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
  ${mediaQueryHelp({ alignItems: { m: "center" } })}
`;

export const ButtonsWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 27px;
  > div {
    display: none !important;
    ${mediaQueryHelp({ display: { m: "block !important" } })}
  }
  > button {
    position: relative;
    top: -10px;
    left: 15px;
    ${mediaQueryHelp({
      top: { m: "5px", l: "0" },
      left: { l: "0" },
    })}
  }
  > button > span:nth-of-type(2) {
    display: none;
    ${mediaQueryHelp({ display: { l: "block" } })}
  }
  button {
    ${mediaQueryHelp({
      fontSize: { m: "1rem", xl: "1.125rem" },
      top: { l: "0px" },
      left: { l: "0px" },
    })}
  }
`;

export const ActivationButtonBottomWrapper = styled("div")`
  display: block;
  margin-top: 20px;
  > div:first-of-type {
    display: flex !important;
    > button {
      font-size: 14px;
      height: 48px;
      border-width: 1px;
      flex: 1;
      svg {
        width: 10px !important;
        height: 10px !important;
      }
    }
  }
  ${mediaQueryHelp({ display: { m: "none" } })}
`;
