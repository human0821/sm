import { useNavigate } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";
import { CommentIcon } from "@/assets/icons";

import { NewsCommentsCountWrapper } from "./NewsCommentsCount.styled";

export function NewsCommentsCount(props: { count: number; id: number }) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    const newsPath = Routes.NEWS_PAGE.replace(":id", String(props.id));
    return navigate(`${newsPath}#comments`);
  };

  return (
    <NewsCommentsCountWrapper onClick={handleNavigate}>
      <CommentIcon />
      <span>{props.count}</span>
    </NewsCommentsCountWrapper>
  );
}
