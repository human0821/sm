import Routes from "@/app/routes/consts/routes";
import { useAppSelector } from "@/app/store";

import {
  LayoutHeaderLogoEntityLink,
  LayoutHeaderLogoEntityLogo,
  LayoutHeaderLogoEntityWrapper,
} from "./LayoutHeaderLogoEntity.styled";

export function LayoutHeaderLogoEntity({ logo = "/images/general/logo.png", children }: LayoutHeaderLogoEntityData) {
  const bgColor = useAppSelector(({ design }) => (design.isPreview ? design.selectedColor : design.userSchema.colorSchema));

  return (
    <LayoutHeaderLogoEntityWrapper bgColor={bgColor}>
      <LayoutHeaderLogoEntityLink to={Routes.DASHBOARD_PAGE}>
        <LayoutHeaderLogoEntityLogo src={logo} alt="logo" />
      </LayoutHeaderLogoEntityLink>
      {children}
    </LayoutHeaderLogoEntityWrapper>
  );
}
