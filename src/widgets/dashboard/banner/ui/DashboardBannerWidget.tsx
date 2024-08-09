import { DashboardBannerEntity } from "@/entities/dashboard/banner";
import { Carousel } from "@/shared/ui/Carousel/Carousel";

import { DashboardBannerWidgetWrapper } from "./DashboardBannerWidget.styled";

export function DashboardBannerWidget({ bannersList }: { bannersList: DashboardBannerEntity[] }) {
  return (
    <DashboardBannerWidgetWrapper>
      <Carousel
        swiperProps={{
          spaceBetween: "21px",
          loop: true,
          speed: 600,
          navigation: true,
          pagination: { clickable: true },
        }}
        otherOptions={{
          navigation: true,
        }}>
        {bannersList.map((banner) => (
          <DashboardBannerEntity key={banner.id} {...banner} />
        ))}
      </Carousel>
    </DashboardBannerWidgetWrapper>
  );
}
