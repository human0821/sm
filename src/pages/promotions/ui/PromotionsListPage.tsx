import { motion } from "framer-motion";
import { useState } from "react";
import { Helmet } from "react-helmet-async";

import { Pagination } from "@/entities/pagination";
import { PromotionCardEntity } from "@/entities/promotion";
import { motionFade } from "@/shared/consts/motion";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";
import { TitleWithTabsLayout } from "@/shared/ui/TitleWithTabsLayout";

import { EmptyTitle, EmptyWrapper, LoaderWrapper, PromotionsList } from "./PromotionsListPage.styled";
import { promotionsMock } from "../consts/mock";
import { tabList } from "../consts/tabList";

export const PromotionsListPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Helmet>Акции</Helmet>
      {isLoading ? (
        <motion.div {...motionFade} key="loader">
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        </motion.div>
      ) : (
        <motion.div {...motionFade} key="content">
          <TitleWithTabsLayout tabs={tabList} queryParams title="Акции" tabsProps={{ style: { maxWidth: 676 } }} />
          {promotionsMock.length > 0 ? (
            <>
              <PromotionsList>
                {promotionsMock.map((item, idx) => (
                  <PromotionCardEntity {...item} key={idx} />
                ))}
              </PromotionsList>
              <Pagination count={27} position="center" />
            </>
          ) : (
            <EmptyWrapper>
              <EmptyTitle>Акции отсутствуют</EmptyTitle>
            </EmptyWrapper>
          )}
        </motion.div>
      )}
    </>
  );
};
