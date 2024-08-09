import { Stack } from "@mui/material";
import { memo } from "react";
import { useLocation, useParams } from "react-router-dom";

import { NewsType } from "@/app/api/news/api";
import { BlockEmptyEntity } from "@/entities/block";
import { NewsCard } from "@/features/news/ui/NewsCard/NewsCard";
import { SurveyForm } from "@/features/survey";

import { NewsLastWidgetWrapper, NewsLastWidgetTitle, NewsLastWidgetEmpty } from "./NewsLastWidget.styled";

export const NewsLastWidget = memo(({ news }: { news: NewsEntity.Card<NewsType>[] }) => {
  const urlParams = useParams();
  const location = useLocation();
  const { id } = urlParams;
  const newsId = id!;
  const isNewsPage = location.pathname.startsWith("/news");

  const mapNews = (lastNews: typeof news) => {
    return lastNews.map((newsCard) =>
      newsCard.newsType === NewsType.News ? (
        <NewsCard key={newsCard.id} newsCard={newsCard} />
      ) : (
        <SurveyForm key={newsCard.id} newsCard={newsCard} />
      ),
    );
  };

  return news.length === 0 ? (
    <NewsLastWidgetEmpty>
      <BlockEmptyEntity title="Новостей нет"></BlockEmptyEntity>
    </NewsLastWidgetEmpty>
  ) : (
    <NewsLastWidgetWrapper>
      <NewsLastWidgetTitle variant="subtitle1" id="lastnewstitle">
        Последние новости
      </NewsLastWidgetTitle>
      <Stack rowGap={2.5}>
        {isNewsPage ? mapNews(news.filter((newsCard) => newsCard.id !== Number(newsId))) : mapNews(news)}
      </Stack>
    </NewsLastWidgetWrapper>
  );
});
