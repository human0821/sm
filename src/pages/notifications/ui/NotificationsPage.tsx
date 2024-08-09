import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

import { BlockEmptyEntity } from "@/entities/block";
import { NotificationEntity } from "@/entities/notification";
import { ReadAllButton } from "@/features/notifications/read-all-button";
import { motionFade } from "@/shared/consts/motion";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";
import { DatePicker } from "@/shared/ui/DatePicker/DatePicker";
import { InputSearch } from "@/shared/ui/Input";

import { PageWrapper, LoaderWrapper, HeaderWrapper, NotificationsList, EmptyWrapper } from "./NotificationsPage.styled";

const mock = [
  {
    id: 1,
    date: "22.03.24",
    time: "17.00",
    message: "Новое поступление мебели по низким ценам Новое поступление мебели по низким ценам",
    readed: false,
  },
  {
    id: 2,
    date: "22.03.24",
    time: "17.00",
    message:
      "Вы действительно хотите пометить все, как прочитанные? Новое поступление мебели по низким ценам Новое поступление мебели по низким ценам",
    readed: false,
  },
  {
    id: 3,
    date: "22.03.24",
    time: "17.00",
    message:
      "Новое поступление мебели по низким ценам Новое поступление мебели по низким ценам Вы действительно хотите пометить все, как прочитанные? Вы действительно хотите пометить все, как прочитанные? Новое поступление мебели по низким ценам",
    readed: false,
  },
  {
    id: 4,
    date: "22.03.24",
    time: "17.00",
    message: "Новое поступление мебели по низким ценам",
    readed: true,
  },
  {
    id: 5,
    date: "22.03.24",
    time: "17.00",
    message: "Новое поступление мебели по низким ценам Новое поступление мебели по низким ценам",
    readed: true,
  },
];

export const NotificationsPage = () => {
  const isFetching = false;
  const { search } = useLocation();
  const [data, setData] = useState(mock);

  return (
    <>
      <Helmet>Уведомления</Helmet>
      <PageWrapper>
        <Typography variant="h1">Уведомления</Typography>
        <HeaderWrapper>
          <InputSearch placeholder="Поиск по вопросам и ответам" fullWidth />
          <DatePicker placeholder="Период" />
          <ReadAllButton />
        </HeaderWrapper>
        {isFetching ? (
          <motion.div {...motionFade} key="loader">
            <LoaderWrapper>
              <Loader />
            </LoaderWrapper>
          </motion.div>
        ) : (
          <motion.div {...motionFade} key="content">
            {data.length > 0 ? (
              <NotificationsList>
                {data.map(({ id, ...other }) => (
                  <motion.div {...motionFade} key={id}>
                    <NotificationEntity id={id} {...other} />
                  </motion.div>
                ))}
              </NotificationsList>
            ) : (
              <EmptyWrapper>
                <BlockEmptyEntity size="h1" title={search.length > 0 ? "Ничего не найдено" : "Уведомления отсутствуют"} />
              </EmptyWrapper>
            )}
          </motion.div>
        )}
      </PageWrapper>
    </>
  );
};
