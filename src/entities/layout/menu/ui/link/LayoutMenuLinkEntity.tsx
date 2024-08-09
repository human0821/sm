import parser from "html-react-parser";

import { LayoutMenuLinkEntityWrapper, LinkIcon } from "./LayoutMenuLinkEntity.styled";
import { useGetMenuLink } from "../../hooks/useGetMenuLink";

export function LayoutMenuLinkEntity({ menu, onClick }: { menu: StoreLayout.Menu; onClick?: () => void }) {
  const menuLink = useGetMenuLink({ menu });

  if (menuLink) {
    return (
      <LayoutMenuLinkEntityWrapper to={menuLink.path} onClick={() => onClick && onClick()}>
        <LinkIcon>{menuLink.icon}</LinkIcon>
        <span>{parser(menuLink.name)}</span>
      </LayoutMenuLinkEntityWrapper>
    );
  } else {
    return <></>;
  }
}
