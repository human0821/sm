import type { NewsType } from "@/app/api/news/api";

import { NewsCardEntity } from "@/entities/news";
import { useSurveyAnswers } from "@/features/survey/hooks/useSurveyAnswers";

export const NewsCard: React.FC<{
  newsCard: NewsEntity.Card<NewsType>;
  children?: React.ReactNode;
}> = ({ newsCard, children }) => {
  const { newsCard: newsCardUpdated } = useSurveyAnswers({ survey: newsCard });
  return <NewsCardEntity newsCard={newsCardUpdated}>{children}</NewsCardEntity>;
};
