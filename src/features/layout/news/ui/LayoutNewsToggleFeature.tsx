import { ChevronDoubleIcon } from "@/assets/icons";

import {
  LayoutNewsToggleButton,
  LayoutNewsToggleText,
  LayoutNewsToggleWrapper,
  LayoutNewsMobileToggleText,
} from "./LayoutNewsToggleFeature.styled";
import { NEWSFEED_TITLE } from "../consts";
import { useLayoutNewsState } from "../hooks/useLayoutNewsState";

export function LayoutNewsToggleFeature({ isMobile }: { isMobile?: boolean }) {
  const { showLayoutNews, toggleLayoutNews } = useLayoutNewsState();

  return isMobile ? (
    <LayoutNewsMobileToggleText>{NEWSFEED_TITLE}</LayoutNewsMobileToggleText>
  ) : (
    <LayoutNewsToggleWrapper active={Number(showLayoutNews)}>
      <LayoutNewsToggleText active={Number(showLayoutNews)} variant="h3">
        {NEWSFEED_TITLE}
      </LayoutNewsToggleText>
      <LayoutNewsToggleButton active={Number(showLayoutNews)} color="primary" onClick={toggleLayoutNews}>
        <ChevronDoubleIcon />
      </LayoutNewsToggleButton>
    </LayoutNewsToggleWrapper>
  );
}
