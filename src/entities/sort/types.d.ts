import type { SelectProps } from "@mui/material";

declare global {
  interface Sort {
    options: Select.Option[];
    paramName: string;
    placeholder?: string;
    multiple?: boolean;
    sx?: SelectProps["sx"];
  }
}
