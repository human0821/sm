import { FormHelperText, Stack, Tooltip } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import React from "react";
import { Controller } from "react-hook-form";

const FormInput: React.FC<FormInputComponent> = React.forwardRef(({ controllerProps, error, input }, ref) => {
  return (
    <Stack sx={{ position: "relative" }}>
      <Controller
        {...controllerProps}
        render={({ field }) => React.cloneElement(input, { ...field, error: Boolean(error), ref })}
      />
      <AnimatePresence mode={"wait"}>
        {error?.message && (
          <Tooltip title={error.message}>
            <FormHelperText error>{error?.message}</FormHelperText>
          </Tooltip>
        )}
      </AnimatePresence>
    </Stack>
  );
});

FormInput.displayName = "FormInput";
export default FormInput;
