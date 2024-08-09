import type { SectionNestedSchema } from "@/app/api/apiGenerator/catalog/sectionsCatalogApi";

import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

import { sectionsCatalogApi } from "@/app/api/apiGenerator/catalog";
import { CategorySection } from "@/entities/category/section";
import { motionFade } from "@/shared/consts/motion";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";

import { CategoriesWrapper, LoaderWrapper } from "./CatalogCategoriesPage.styled";

export const CatalogCategoriesPage = () => {
  const getSections = sectionsCatalogApi.useGetSectionsCatalogQuery();
  const [data, setData] = useState<SectionNestedSchema[]>();

  useEffect(() => {
    if (getSections.data) {
      setData(getSections.data);
    }
  }, [getSections.data]);

  return (
    <>
      <Helmet>Каталог</Helmet>
      {getSections.isFetching ? (
        <motion.div {...motionFade} key="loader">
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        </motion.div>
      ) : (
        <motion.div {...motionFade} key="content">
          <CategoriesWrapper>
            <Typography variant="h1">Каталог</Typography>
            {data?.map(({ id, ...other }, index) => (
              <CategorySection key={id} id={id} {...other} reverse={index % 2 === 0} />
            ))}
          </CategoriesWrapper>
        </motion.div>
      )}
    </>
  );
};
