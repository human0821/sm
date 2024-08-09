import { MenuIcon } from "@/assets/icons";

import { LayoutMenuToggleFeatureMobileWrapper } from "./LayoutMenuToggleFeature.styled";
import { useLayoutMenuState } from "../hooks/useLayoutMenuState";
import { useResolveBodyId } from "../hooks/useResolveBodyId";

export const LayoutMenuToggleMobileFeature: React.FC = () => {
  const { toggleLayoutMenu } = useLayoutMenuState();

  useResolveBodyId();

  return (
    <LayoutMenuToggleFeatureMobileWrapper onClick={toggleLayoutMenu}>
      <MenuIcon />
    </LayoutMenuToggleFeatureMobileWrapper>
  );
};
