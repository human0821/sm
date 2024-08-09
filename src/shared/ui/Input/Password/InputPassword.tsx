import { IconButton, InputAdornment, TextField, type TextFieldProps } from "@mui/material";
import React, { useState } from "react";

import { EyeOffIcon, EyeOnIcon } from "@/assets/icons";

const InputPassword = React.forwardRef(({ ...props }: TextFieldProps, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <TextField
      inputRef={ref}
      {...props}
      type={showPassword ? "text" : "password"}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              onClick={() => setShowPassword(!showPassword)}
              edge="end"
              color={props.error ? "error" : props.color}
              disabled={props.disabled}>
              {showPassword ? <EyeOffIcon /> : <EyeOnIcon />}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
});

InputPassword.displayName = "InputPassword";
export default InputPassword;
