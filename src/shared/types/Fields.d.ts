import type Joi from "joi";
import type { RegisterOptions } from "react-hook-form";

declare global {
  interface Field {
    name: string;
    placeholder?: string;
    label?: string;
    helperText?: string;
    validation?: RegisterOptions;
    options?: Select.Option[];
    flyValidation?: Joi.Schema;
  }
}
