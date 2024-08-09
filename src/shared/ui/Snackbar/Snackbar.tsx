import { SnackbarContent } from "notistack";
import { forwardRef } from "react";

import { ErrorIcon, CheckIcon } from "@/assets/icons";

import { Wrapper } from "./Snackbar.styles";

export const Snackbar = forwardRef<HTMLDivElement, Snackbar>(({ variant, message }, ref) => {
  const icon = {
    success: <CheckIcon />,
    error: <ErrorIcon />,
  };

  return (
    <SnackbarContent ref={ref}>
      <Wrapper variant={variant}>
        {icon[variant]}
        {message}
      </Wrapper>
    </SnackbarContent>
  );
});
