import { Stack, styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const ResultFindBrandsWrap = styled(Stack)`
  gap: 20px;

  & .MuiTabs-flexContainer {
    justify-content: start;
    gap: 20px;

    button {
      flex-grow: 1;
      max-width: none;

      &::before {
        display: none;
      }
    }
  }
`;

export const FinResultTabsWrap = styled("div")`
  & button {
    ${mediaQueryHelp({ height: { xs: "60px !important", s: "62px !important", l: "64px !important" } })}
  }
`;
