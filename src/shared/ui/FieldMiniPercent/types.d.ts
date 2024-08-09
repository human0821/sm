import type { ProductAccordionPercentEntity } from "@/entities/ProductAccordionPercentEntity/types";
import type { TextFieldProps } from "@mui/material";
import type Joi from "joi";

interface FieldMiniPercent {
  props: TextFieldProps;
  onChange: ProductAccordionPercentEntity["onChange"];
  validate?: Joi.AlternativesSchema | Joi.StringSchema;
  isGlows?: boolean;
}
