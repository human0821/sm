import { useState } from "react";
import { useLocation } from "react-router-dom";

import { useGetBannersPublicQuery } from "@/app/api/banners/api";
import Routes from "@/app/routes/consts/routes";
import { useAppSelector } from "@/app/store";
import { LayoutHeaderCartEntity } from "@/entities/layout/header/cart";
import { LayoutHeaderFavoritesEntity } from "@/entities/layout/header/favorites";
import { LayoutHeaderLogoEntity } from "@/entities/layout/header/logo/ui/LayoutHeaderLogoEntity";
import { LayoutHeaderNotificationsEntity } from "@/entities/layout/header/notifications";
import { LayoutBannerToggle } from "@/features/layout/banner";
import { LayoutMenuToggleFeature, LayoutMenuToggleMobileFeature } from "@/features/layout/menu";
import { LayoutSearchAutocomplete } from "@/features/layout/search";
import { ProfileAdminHeader } from "@/features/profile";

import {
  LayoutHeaderWidgetBanner,
  LayoutHeaderWidgetWrapper,
  LayoutHeaderStretchBlock,
  LayoutHeaderSearchWrapper,
} from "./LayoutHeaderWidget.styled";

export function LayoutHeaderWidget({ isDesktop }: { isDesktop?: boolean }) {
  const [showBannerToggle, setShowBannerToggle] = useState(true);
  const location = useLocation();
  const { data: bannersList } = useGetBannersPublicQuery();
  const headerBgImage = useAppSelector(({ design }) =>
    design.isPreview ? design.previewImagesLink.header : design.currentImagesLink.header,
  );
  const logoBgImage = useAppSelector(({ design }) =>
    design.isPreview ? design.previewImagesLink.logo : design.currentImagesLink.logo,
  );

  let bannerToggle;
  if (location.pathname === Routes.DASHBOARD_PAGE) {
    if (bannersList?.length) {
      bannerToggle = (
        <LayoutHeaderWidgetBanner>
          <LayoutBannerToggle />
        </LayoutHeaderWidgetBanner>
      );
    }
  }

  const onShowResult = (result: boolean) => {
    setShowBannerToggle(!result);
  };

  return (
    <>
      <LayoutHeaderWidgetWrapper bgImage={headerBgImage || ""}>
        {!isDesktop && <LayoutMenuToggleMobileFeature />}
        <LayoutHeaderLogoEntity logo={logoBgImage || undefined}>
          {isDesktop && <LayoutMenuToggleFeature />}
        </LayoutHeaderLogoEntity>
        {isDesktop ? <LayoutSearchAutocomplete onShowResult={onShowResult} /> : <LayoutHeaderStretchBlock />}
        <LayoutHeaderFavoritesEntity />
        <LayoutHeaderCartEntity />
        <LayoutHeaderNotificationsEntity />
        <ProfileAdminHeader />
        {showBannerToggle && bannerToggle}
      </LayoutHeaderWidgetWrapper>
      {!isDesktop && (
        <LayoutHeaderSearchWrapper>
          <LayoutSearchAutocomplete onShowResult={onShowResult} />
        </LayoutHeaderSearchWrapper>
      )}
    </>
  );
}
