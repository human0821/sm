import { IconButton, InputAdornment, TextField, type TextFieldProps } from "@mui/material";
import React from "react";

import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";

import { SendIcon } from "./InputSend.styled";

const InputSend = React.forwardRef(({ ...propsAll }: TextFieldProps & { loading?: number; disableSend?: boolean }, ref) => {
  const { disableSend, ...props } = propsAll;
  return (
    <TextField
      inputRef={ref}
      {...props}
      disabled={Boolean(props.loading) || props.disabled}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              type="submit"
              edge="end"
              color={props.error ? "error" : props.color}
              disabled={Boolean(props.disabled || disableSend)}>
              {props.loading ? <Loader /> : <SendIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
});

InputSend.displayName = "InputSend";
export default InputSend;
