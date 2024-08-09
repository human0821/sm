import { styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const FilterWrapper = styled("div")<{ isCounterparties?: boolean; withChildren?: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  ${({ isCounterparties }) =>
    mediaQueryHelp(
      isCounterparties
        ? {
            // /account/counterparties
            gridTemplateColumns: { xl: "752px 1fr", xxl: "1140px 1fr" },
            gap: { xs: "16px", xxl: "20px" },
          }
        : {
            gridTemplateColumns: { xl: "2fr 1fr" },
            gap: { xs: "20px" },
          },
    )}
`;

export const LeftBlock = styled("div")<{ isCounterparties?: boolean }>`
  display: grid;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  ${mediaQueryHelp({ flexDirection: { s: "row" } })}
  ${({ isCounterparties }) => mediaQueryHelp({ gridTemplateColumns: { s: isCounterparties ? "1fr" : "2fr 1fr" } })}
`;
