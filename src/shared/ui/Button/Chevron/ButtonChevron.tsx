import { ChevronIcon, ChevronDoubleIcon } from "@/assets/icons";

import { ButtonChevronWrapper } from "./ButtonChevron.styled";

export function ButtonChevron({ variant = "swiper-navigation", active, onClick, disabled }: ButtonChevronComponent) {
  return (
    <ButtonChevronWrapper variant={variant} active={active} onClick={onClick} disabled={disabled}>
      {variant === "banner-toggle" ? <ChevronDoubleIcon /> : <ChevronIcon />}
    </ButtonChevronWrapper>
  );
}
