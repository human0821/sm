import { ChevronAccordionIcon } from "@/assets/icons";

import { AccordionArrowWrap } from "./AccordionArrow.styled";

export function AccordionArrow({ isExpanded }: AccordionArrow) {
  return (
    <AccordionArrowWrap isExpanded={isExpanded} sx={(theme) => ({ color: theme.palette.primary.main })}>
      <ChevronAccordionIcon />
    </AccordionArrowWrap>
  );
}
