import { ButtonChevron } from "@/shared/ui/Button/Chevron/ButtonChevron";

import { useLayoutBannerState } from "../hooks/useLayoutBannerState";

export function LayoutBannerToggle() {
  const { showLayoutBanner, toggleLayoutBanner, isAnimate } = useLayoutBannerState();

  return (
    <ButtonChevron
      variant="banner-toggle"
      disabled={isAnimate}
      active={Number(!showLayoutBanner)}
      onClick={toggleLayoutBanner}
    />
  );
}
