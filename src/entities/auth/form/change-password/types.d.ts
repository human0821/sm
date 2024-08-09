import type { BoxProps } from "@mui/material";
import type { ErrorOption } from "react-hook-form";

declare global {
  interface ChangePasswordForm {
    onSubmit: any;
    isLoading?: boolean;
    isSuccess?: boolean;
    align?: "right" | "left" | "center";
    showRules?: boolean;
    error?: {
      name: "newPassword" | "newPasswordRepeat" | "root" | `root.${string}`;
      error: ErrorOption;
      options?:
        | {
            shouldFocus: boolean;
          }
        | undefined;
    };
    sx?: BoxProps["sx"];
    disbledFields?: boolean;
  }
}
