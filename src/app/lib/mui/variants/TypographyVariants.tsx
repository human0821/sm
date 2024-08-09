// заготовка добавления вариантов для Typography

import type { CSSProperties } from "react";

declare module "@mui/material/styles" {
  interface TypographyVariants {
    gray: CSSProperties;
  }

  interface TypographyVariantsOptions {
    gray?: CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    gray: true;
  }
}
