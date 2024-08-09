import type { NewsCardV2Props } from "@/entities/news/ui/NewsCardEntityAdmin/types";

import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";
import { NewsCardEntityAdmin } from "@/entities/news/ui/NewsCardEntityAdmin";

import { NewsCreatedCard, NewsCreatedWidgetButtons } from "./NewsCreatedWidget.styles";

export function NewsCreatedWidget({ news }: { news: NewsCardV2Props }) {
  return (
    <Box mx={"auto"} maxWidth={676}>
      <NewsCreatedCard>
        <NewsCardEntityAdmin news={news} />
      </NewsCreatedCard>

      <Typography variant="h3" textAlign={"center"}>
        Запись опубликована!
      </Typography>

      <NewsCreatedWidgetButtons>
        <Link to={Routes.DASHBOARD_PAGE}>
          <Button fullWidth variant="outlined">
            На главную
          </Button>
        </Link>
        <Link to={`${Routes.NEWS}/${news.id}`}>
          <Button fullWidth variant="contained">
            Перейти к записи
          </Button>
        </Link>
      </NewsCreatedWidgetButtons>
    </Box>
  );
}
