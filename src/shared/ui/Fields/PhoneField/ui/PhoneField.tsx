import type { TextFieldProps } from "@mui/material";
import type { UseFormReturn } from "react-hook-form";

import { TextField } from "@mui/material";
import { useEffect, useState, type ReactNode } from "react";
import InputMask from "react-input-mask";

import { FIELDS } from "@/shared/consts/fields";
import { fieldRegister } from "@/shared/utils/fieldRegister";

export function PhoneField({ form, field = FIELDS.phone }: { form: UseFormReturn<any, any>; field?: Field }) {
  const register = fieldRegister(form, field),
    propsField: Partial<ReturnType<typeof fieldRegister>> = {
      error: register.error,
      helperText: register.helperText,
      label: register.label,
      placeholder: register.placeholder,
      ref: register.ref,
      name: field.name,
    },
    [, render] = useState(0),
    [init, setInit] = useState(false),
    value = form.getValues(field.name);

  useEffect(() => {
    if (!init && value) {
      setInit(true);
      render((x) => x + 1);
    }
  }, [value]);

  return (
    <InputMask
      mask="+7 (999) 999-9999"
      onChange={(x) => {
        render((x) => x + 1);
        register.onChange(x);
      }}
      onBlur={(e) => {
        register.onChange({ target: e.target, type: "change" });
        register.onBlur(e);
      }}
      ref={register.ref}
      disabled={field.validation?.disabled}
      value={value}>
      {
        ((props: TextFieldProps) => (
          <TextField {...props} {...propsField} type="tel" disabled={field.validation?.disabled} />
        )) as unknown as ReactNode
      }
    </InputMask>
  );
}
