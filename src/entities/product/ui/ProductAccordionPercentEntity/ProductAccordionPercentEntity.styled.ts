import { styled } from "@mui/material";

import { Colors } from "@/app/styles";

export const ProductAccordionPercentEntityWrap = styled("div")`
  & .MuiAccordionSummary-root {
    background: none !important;
  }

  & .MuiPaper-root {
    background: transparent;
  }

  & .MuiAccordionDetails-root {
    padding: 30px;
  }

  & > .MuiPaper-root {
    padding: 0;
    border: 1px ${Colors.DIVIDER} solid;

    & > .MuiButtonBase-root {
      background: ${({ theme }) => theme.palette.background.paper} !important;
      border-radius: 20px;
      border-bottom: 1px ${Colors.DIVIDER} solid;
      padding: 0 30px;
    }
  }
`;
