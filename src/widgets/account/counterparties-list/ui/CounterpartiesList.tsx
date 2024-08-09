import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { Stack } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useLocation } from "react-router-dom";

import { useGetCounterpartiesQuery } from "@/app/api/counterparties/api";
import { CounterpartiesListEntities } from "@/entities/counterparties/list";
import { Pagination } from "@/entities/pagination";
import { motionFade } from "@/shared/consts/motion";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";

import { LoaderWrapper, LayoutWrapper } from "./CounterpartiesList.styled";

export const CounterpartiesList = () => {
  const { search } = useLocation();
  const getCounterparties = useGetCounterpartiesQuery(search.length ? `${search}&size=6` : "?size=6");
  const [counterparties, setCounterparties] = useState<CounterpartiesApi.CounterpartyItem[]>([]);
  const [pageCount, setPageCount] = useState<number>(1);
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    if (getCounterparties.data) {
      const { items, pages } = getCounterparties.data as Api.ResponseWithPagePaginate<CounterpartiesApi.CounterpartyItem>;
      setCounterparties(items);
      setPageCount(pages);
    }
    if (getCounterparties.error) {
      showBoundary({ code: (getCounterparties.error as FetchBaseQueryError).status || 500 });
    }
  }, [getCounterparties]);

  useEffect(() => {
    if (search.length === 0) {
      getCounterparties.refetch();
    }
  }, [search]);

  return (
    <LayoutWrapper>
      {getCounterparties.isFetching ? (
        <motion.div {...motionFade} key="loader">
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        </motion.div>
      ) : (
        <motion.div {...motionFade} key="content">
          <CounterpartiesListEntities items={counterparties} />
          <Stack sx={{ marginTop: "40px" }}>
            <Pagination count={pageCount} position="center" />
          </Stack>
        </motion.div>
      )}
    </LayoutWrapper>
  );
};
