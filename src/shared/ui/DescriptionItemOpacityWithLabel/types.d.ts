interface DescriptionItemOpacityWithLabel {
  label?: string;
  description: string | null;
  linkType?: "mailto" | "tel" | undefined;
  sliceDigits?: number;
  lineClamp?: number;
}
