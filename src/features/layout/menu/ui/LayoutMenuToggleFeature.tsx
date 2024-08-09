import { ChevronDoubleIcon } from "@/assets/icons";

import { LayoutMenuToggleFeatureButton } from "./LayoutMenuToggleFeature.styled";
import { useLayoutMenuState } from "../hooks/useLayoutMenuState";

export function LayoutMenuToggleFeature() {
  const { showLayoutMenu, toggleLayoutMenu } = useLayoutMenuState();

  return (
    <LayoutMenuToggleFeatureButton active={Number(showLayoutMenu)} onClick={toggleLayoutMenu}>
      <ChevronDoubleIcon />
    </LayoutMenuToggleFeatureButton>
  );
}
