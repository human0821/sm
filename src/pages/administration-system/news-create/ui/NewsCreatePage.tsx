import type { NewsCardV2Props } from "@/entities/news/ui/NewsCardEntityAdmin/types";

import { Stack, Typography } from "@mui/material";
import { useState } from "react";

import Routes from "@/app/routes/consts/routes";
import { NewsCreateFeature } from "@/features/administration";
import { Breadcrumbs, BreadcrumbsLink } from "@/shared/ui/Breadcrumbs";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";
import { NewsCreateWidget } from "@/widgets/administration/NewsCreateWidget";
import { SurveyWidget } from "@/widgets/administration/SurveyWidget/ui/SurveyWidget";
import { NewsCreatedWidget } from "@/widgets/news/news-created";

import { NewsCreateCardWrap, NewsCreateWrap } from "./NewsCreatePage.styles";
import { useNewsCreate } from "../hooks/useNewsCreate";

export function NewsCreatePage() {
  const [newsCreated, setNewsCreated] = useState<NewsCardV2Props | null>(null),
    { form, submit, isLoading, disableSubmit } = useNewsCreate(setNewsCreated),
    breadcrumbs = [
      <BreadcrumbsLink underline="hover" key="0" href={Routes.SYSTEM_NEWS_FEED_PAGE}>
        Новостная лента
      </BreadcrumbsLink>,
      "Создание записи",
    ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />

      {newsCreated ? (
        <NewsCreatedWidget news={newsCreated} />
      ) : (
        <NewsCreateWrap>
          <form onSubmit={form.handleSubmit(submit)}>
            <Stack alignItems={"center"} gap={3}>
              <NewsCreateCardWrap>
                <Typography variant="h1" mb={"58px"}>
                  Создание записи
                </Typography>

                <NewsCreateFeature form={form} />
              </NewsCreateCardWrap>

              {form.getValues().newsType === "Опрос" ? <SurveyWidget form={form} /> : <NewsCreateWidget form={form} />}

              <ButtonLoading
                variant="contained"
                sx={{ ml: "auto", minWidth: 300 }}
                disabled={disableSubmit}
                type="submit"
                loading={isLoading}>
                Опубликовать запись
              </ButtonLoading>
            </Stack>
          </form>
        </NewsCreateWrap>
      )}
    </>
  );
}
