import type { RootState } from "@/app/store";

import { AnimatePresence } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { useSelector } from "react-redux";

import { useGetBannersPublicQuery } from "@/app/api/banners/api";
import { DashboardBannerWidget } from "@/widgets/dashboard/banner";
import { DashboardWidgets } from "@/widgets/dashboard/widgets";

import { DashboardPageBannerWrapper, DashboardPageBannerMotion } from "./DashboardPage.styled";

export function DashboardPage() {
  const showBanner = useSelector((state: RootState) => state.layout.showBanner);
  const { data: bannersList } = useGetBannersPublicQuery();

  return (
    <div>
      <Helmet>
        <title>Главная</title>
        <script src="https://code.jivo.ru/widget/dGSnhfdSIA" async></script>
      </Helmet>
      <AnimatePresence initial={false} mode={"wait"}>
        {bannersList?.length && showBanner && (
          <DashboardPageBannerMotion
            initial={{ height: 0, paddingBottom: 0, opacity: 0 }}
            animate={{ height: "100%", opacity: 1 }}
            exit={{ height: 0, paddingBottom: 0, opacity: 0 }}>
            <DashboardPageBannerWrapper>
              <DashboardBannerWidget bannersList={bannersList} />
            </DashboardPageBannerWrapper>
          </DashboardPageBannerMotion>
        )}
      </AnimatePresence>
      <DashboardWidgets />
    </div>
  );
}
