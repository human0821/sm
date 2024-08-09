import { lighten, type Theme } from "@mui/material";

import { useAppSelector } from "@/app/store";

export function useThemePalette(theme: Theme) {
  const colorSchema = useAppSelector((state) => state.design.userSchema.colorSchema),
    isPreview = useAppSelector((state) => state.design.isPreview),
    selectedColor = useAppSelector((state) => state.design.selectedColor),
    resolvedColor = isPreview ? selectedColor : colorSchema,
    light = lighten(resolvedColor, 0.95);

  theme.palette.primary.main = resolvedColor;
  theme.palette.text.primary = resolvedColor;
  theme.palette.background.paper = light;
}
