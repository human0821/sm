import { Box } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { useGetNewsLastQuery } from "@/app/api/news/api";
import { NewsCardEntity } from "@/entities/news";
import { motionFade } from "@/shared/consts/motion";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";

import { LastNewsStackWrapper, LastNewsStackText } from "./LastNewsStack.styled";
import { LAST_NEWS_TEXT } from "../../consts";

export const LastNewsStack: React.FC = () => {
  const lastNewsStackWrapper = useRef<HTMLDivElement>(null);
  const [newsLastPage, setNewsLastPage] = useState(1);
  const { data: newsLast, isFetching } = useGetNewsLastQuery({ page: newsLastPage, size: 10 });

  useEffect(() => {
    const onScroll = () => {
      if (lastNewsStackWrapper.current) {
        const scrolledToBottom =
          lastNewsStackWrapper.current.scrollTop >
          lastNewsStackWrapper.current.scrollHeight - lastNewsStackWrapper.current.offsetHeight - 200;
        if (scrolledToBottom && !isFetching && newsLastPage < (newsLast?.pages || 1)) {
          setNewsLastPage(newsLastPage + 1);
        }
      }
    };

    lastNewsStackWrapper.current?.addEventListener("scroll", onScroll);

    return () => {
      lastNewsStackWrapper.current?.removeEventListener("scroll", onScroll);
    };
  }, [lastNewsStackWrapper.current, newsLastPage, isFetching]);

  return (
    <>
      {isFetching && (
        <Box component="span" display="flex" justifyContent="center" padding="16px 16px 40px">
          <Loader />
        </Box>
      )}
      <AnimatePresence>
        {newsLast?.items.length && (
          <motion.div {...motionFade}>
            <LastNewsStackWrapper ref={lastNewsStackWrapper}>
              <LastNewsStackText>{LAST_NEWS_TEXT}</LastNewsStackText>
              {newsLast?.items?.map((newsCard) => <NewsCardEntity key={newsCard.id} newsCard={newsCard} />)}
            </LastNewsStackWrapper>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
