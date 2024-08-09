import type { UseFormReturn } from "react-hook-form";

import { TextField } from "@mui/material";

import { FIELDS } from "@/shared/consts/fields";
import { FLY_FIELD_VALIDATORS } from "@/shared/consts/validationPatterns";
import { fieldRegister } from "@/shared/utils/fieldRegister";

export function EmailField({ form, field = FIELDS.email }: { form: UseFormReturn<any, any>; field?: Field }) {
  form.watch(field.name);

  return (
    <TextField
      {...fieldRegister(form, field)}
      value={form.getValues(field.name)}
      onChange={(x) => {
        FLY_FIELD_VALIDATORS.email(x.target.value) && form.register(field.name).onChange(x);
      }}
    />
  );
}
