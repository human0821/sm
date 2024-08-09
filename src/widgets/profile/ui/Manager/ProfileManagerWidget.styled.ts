import { styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const ManagerInfoWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 30px;
  ${mediaQueryHelp({ gap: { m: "20px" } })}
`;

export const ManagerWrapper = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  height: 100%;
  h3 {
    font-size: 1.125rem;
    ${mediaQueryHelp({ fontSize: { s: "1.25rem", xl: "1.5rem" } })}
  }
  ${mediaQueryHelp({
    padding: { s: "10px" },
  })}
  h3 {
    font-size: 1.125rem;
    ${mediaQueryHelp({ fontSize: { s: "1.25rem", xl: "1.5rem" } })}
  }
  ${mediaQueryHelp({
    padding: { s: "10px" },
  })}
`;

export const ManagerInfo = styled("div")`
  flex: 1;
`;
