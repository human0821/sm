import { Box } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { memo, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";

import { useGetNewsLastQuery, useGetNewsPinnedQuery } from "@/app/api/news/api";
import { type RootState } from "@/app/store";
import { LayoutNewsToggleFeature } from "@/features/layout/news";
import { useActions } from "@/shared/hooks/useActions";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";
import { NewsLastWidget } from "@/widgets/news/last";
import { NewsPinnedWidget } from "@/widgets/news/pinned";

import { LayoutNewsWidgetContent, LayoutNewsWidgetMotion, LayoutNewsWidgetWrapper } from "./LayoutNewsWidget.styled";

export const LayoutNewsWidget = memo(
  ({
    isMobile = false,
    hidePinned = false,
    canToggle = true,
  }: {
    isMobile?: boolean;
    hidePinned?: boolean;
    canToggle?: boolean;
  }) => {
    const layoutNewsWrapper = useRef<HTMLDivElement>(null);
    const showLayoutNews = useSelector((state: RootState) => state.layout.showNews);
    const { data: newsPinned } = useGetNewsPinnedQuery();
    const [newsLastPage, setNewsLastPage] = useState(1);
    const { data: newsLast, isFetching } = useGetNewsLastQuery({
      page: newsLastPage,
      size: 10,
    });
    const actions = useActions();

    useEffect(() => {
      if (newsLast?.items) {
        const surveyItems = newsLast.items.map((item) => {
          const { id: newsId, answers, commentsCount } = item;
          return {
            newsId,
            commentsCount: commentsCount || 0,
            answers: (answers || []).map((answer) => ({
              id: answer.id!,
              answer: answer.answer!,
              answered: answer.isAnswer!,
              result: answer.percent!,
              freeAnswer: answer.freeAnswer!,
            })),
          };
        });
        actions.setSurveyAnswers(surveyItems);
      }
      const onScroll = () => {
        if (layoutNewsWrapper.current) {
          const scrolledToBottom =
            layoutNewsWrapper.current.scrollTop >
            layoutNewsWrapper.current.scrollHeight - layoutNewsWrapper.current.offsetHeight - 200;
          if (scrolledToBottom && !isFetching && newsLastPage < (newsLast?.pages || 1)) {
            setNewsLastPage(newsLastPage + 1);
          }
        }
      };

      layoutNewsWrapper.current?.addEventListener("scroll", onScroll);

      return () => {
        layoutNewsWrapper.current?.removeEventListener("scroll", onScroll);
      };
    }, [layoutNewsWrapper.current, newsLastPage, isFetching]);

    return (
      <LayoutNewsWidgetWrapper active={Number(!canToggle || showLayoutNews)} isMobile={isMobile} canToggle={canToggle}>
        {canToggle && <LayoutNewsToggleFeature isMobile={isMobile} />}
        <LayoutNewsWidgetContent ref={layoutNewsWrapper} isMobile={isMobile} canToggle={canToggle}>
          <AnimatePresence initial={false} mode={"popLayout"}>
            {(isMobile || !canToggle || showLayoutNews) && (
              <LayoutNewsWidgetMotion initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                {!hidePinned && newsPinned && (newsPinned.length > 0) && <NewsPinnedWidget news={newsPinned} />}
                {<NewsLastWidget news={newsLast?.items || []} />}
              </LayoutNewsWidgetMotion>
            )}
          </AnimatePresence>
          {isFetching && (
            <Box component="span" display="flex" justifyContent="center" padding="16px 16px 40px">
              <Loader />
            </Box>
          )}
        </LayoutNewsWidgetContent>
      </LayoutNewsWidgetWrapper>
    );
  },
);
