import type { SelectProps } from "@mui/material";
declare global {
  namespace Select {
    interface Option {
      value: string | number;
      name: string;
    }

    interface Component extends SelectProps {
      multiple?: boolean;
      placeholder?: string;
      options: Option[];
      defaultValue?: Option[] | Option;
      label?: string;
      onCustomChange?: (value: Option[] | Option) => void;
      onChange?: SelectProps["onChange"];
      withFormHook?: boolean;
      sx?: SelectProps["sx"];
    }
  }
}
