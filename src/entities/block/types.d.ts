import type { TypographyProps } from "@mui/material";

declare global {
  namespace Block {
    export interface Card {
      children?: React.ReactNode;
      className?: string;
    }
    export interface Empty {
      title?: string;
      children?: React.ReactNode;
      size?: TypographyProps["variant"];
    }
  }
}
