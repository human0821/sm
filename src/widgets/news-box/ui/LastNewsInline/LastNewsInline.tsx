import { useMediaQuery } from "@mui/material";
import { useMemo } from "react";
import { Pagination } from "swiper/modules";

import { useGetNewsLastQuery } from "@/app/api/news/api";
import { Breakpoints } from "@/app/styles/breakpoints";
import { NewsCardEntity } from "@/entities/news";
import { Carousel } from "@/shared/ui/Carousel/Carousel";

import { LastNewsTabletText, LastNewsTabletWrapper } from "./LastNewsInline.styled";
import { LAST_NEWS_TEXT } from "../../consts";

export const LastNewsInline: React.FC = () => {
  const { data: newsLast } = useGetNewsLastQuery({ page: 1, size: 10 });
  const isMobileL = useMediaQuery(`(min-width:${Breakpoints.MOBILE_L})`);
  const isTablet = useMediaQuery(`(min-width:${Breakpoints.TABLET})`);

  const slides = useMemo(() => {
    let slides = 1;
    if (isMobileL) slides = 2;
    if (isTablet) slides = 3;
    return slides;
  }, [isMobileL, isTablet]);

  return (
    newsLast?.items.length && (
      <LastNewsTabletWrapper>
        <LastNewsTabletText>{LAST_NEWS_TEXT}</LastNewsTabletText>
        <Carousel
          swiperProps={{
            modules: [Pagination],
            pagination: { clickable: true },
            spaceBetween: 20,
            slidesPerView: slides,
          }}>
          {newsLast?.items?.map((newsCard) => <NewsCardEntity key={newsCard.id} newsCard={newsCard} />)}
        </Carousel>
      </LastNewsTabletWrapper>
    )
  );
};
