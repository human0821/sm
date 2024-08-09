import type { AccordionChild } from "../types";

import { AccordionDetails, AccordionSummary } from "@mui/material";

import { mediaQueryHelp } from "@/app/styles/functions";
import { ChevronAccordionIcon } from "@/assets/icons";

import { AccordionChildWrap } from "./AccordionChild.styled";

export function AccordionChild({ label, children }: AccordionChild) {
  return (
    <AccordionChildWrap>
      <AccordionSummary
        expandIcon={<ChevronAccordionIcon />}
        sx={mediaQueryHelp({
          fontSize: { xs: "0.875rem", s: "1.125rem", m: "1.25rem" },
          height: { xs: "48px", s: "56px", m: "64px" },
        })}>
        {label}
      </AccordionSummary>
      <AccordionDetails>{children}</AccordionDetails>
    </AccordionChildWrap>
  );
}
