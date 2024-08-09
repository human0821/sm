import type { ReactNode } from "react";

interface MuiSelect {
  helperText?: ReactNode;
  placeholder?: ReactNode;
  options?: Select.Option[];
  multipleAll?: boolean;
}
