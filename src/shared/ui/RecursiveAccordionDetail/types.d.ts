import type { AccordionChild, ProductAccordionPercentEntity } from "@/entities/ProductAccordionPercentEntity/types";

interface RecursiveAccordionDetail {
  array: AccordionChild[];
  onChange: ProductAccordionPercentEntity["onChange"];
}
