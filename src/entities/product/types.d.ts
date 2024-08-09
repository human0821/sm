import type { SectionMarkupSchema } from "@/app/api/apiGenerator/admin/partnersAdminApi";
import type { TextFieldProps } from "@mui/material";
import type { ReactNode } from "react";

declare namespace ProductEntity {
  export interface SnippetAutocomplete {
    id: number;
    thumb?: string;
    title: string;
    count?: number;
    cost?: number;
  }
}

interface AccordionChild {
  label: ReactNode;
  percent: number | string;
  id: string;
  children?: AccordionChild[];
}

type FinResultMarkup = { markup?: number | "*" };

interface ProductAccordionPercentEntity {
  items: SectionMarkupSchema & FinResultMarkup;
  onChange: (event: TextFieldProps["onChange"], value: { value: number; id: string }) => void;
  isExpanded?: boolean;
  changedIds?: string[];
  disabled?: boolean;
}
