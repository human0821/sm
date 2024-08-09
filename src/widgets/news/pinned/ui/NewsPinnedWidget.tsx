import type { NewsType } from "@/app/api/news/api";

import { Pagination } from "swiper/modules";

import { NewsCardEntity } from "@/entities/news";
import { Carousel } from "@/shared/ui/Carousel/Carousel";

import { NewsPinnedWidgetCarousel, NewsPinnedWidgetTitle } from "./NewsPinnedWidget.styled";

export function NewsPinnedWidget({ news }: { news: NewsEntity.Card<NewsType>[] }) {
  return (
    <div>
      <NewsPinnedWidgetTitle variant="subtitle1">Закрепленные новости</NewsPinnedWidgetTitle>
      <NewsPinnedWidgetCarousel>
        <Carousel
          swiperProps={{
            modules: [Pagination],
            pagination: { clickable: true },
            spaceBetween: 20,
          }}>
          {news.map((newsCard) => (
            <NewsCardEntity key={newsCard.id} newsCard={newsCard} />
          ))}
        </Carousel>
      </NewsPinnedWidgetCarousel>
    </div>
  );
}
