import type { NewsType } from "@/app/api/news/api";

import { Link } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";
import { NewsCommentsCount } from "@/shared/ui/CommentsCount/NewsCommentsCount";
import { Tag } from "@/shared/ui/Tag/Tag";

import { NewsCardCategories, NewsCardDate, NewsCardFooter, NewsCardTitle, NewsCardWrapper } from "./NewsCardEntity.styled";
import { useCardTags } from "../../hooks/useCardTags";

export function NewsCardEntity({
  newsCard,
  children,
}: {
  newsCard: NewsEntity.Card<NewsType>;
  children?: React.ReactNode;
}) {
  const newsTags = useCardTags({ newsCard });

  return (
    <NewsCardWrapper>
      <NewsCardCategories>
        {newsTags.map((tag) => (
          <Tag key={tag.name} {...tag} />
        ))}
      </NewsCardCategories>
      <NewsCardTitle>
        <Link to={Routes.NEWS_PAGE.replace(":id", String(newsCard.id))}>{newsCard.header}</Link>
      </NewsCardTitle>
      {children}
      <NewsCardFooter>
        <NewsCommentsCount id={newsCard.id} count={newsCard.commentsCount || 0} />
        <NewsCardDate>{newsCard.date}</NewsCardDate>
      </NewsCardFooter>
    </NewsCardWrapper>
  );
}
