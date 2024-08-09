import { Accordion, styled } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";

export const AccordionChildWrap = styled(Accordion)`
  & .MuiAccordionDetails-root {
    display: flex;
    flex-direction: column;
    ${mediaQueryHelp({ gap: { xs: "10px", s: "20px" } })}
  }
`;
