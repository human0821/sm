import type { ReactNode } from "react";
import type { RegisterOptions, UseFormReturn } from "react-hook-form";

export const fieldRegister = <U extends Field>(
  form: UseFormReturn<any, any>,
  field: U,
  validation: RegisterOptions = {},
) => {
  return {
    ...form.register(field.name, { ...field.validation, ...validation } as RegisterOptions),
    placeholder: field.placeholder ?? field.label,
    label: field.label,
    helperText: (form.formState.errors[field.name]?.message ?? (field.helperText || "")) as ReactNode,
    error: !!form.formState.errors[field.name]?.message,
    options: field.options as U["options"],
  };
};
