import type { SectionNestedSchema } from "@/app/api/apiGenerator/catalog/sectionsCatalogApi";

import { Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState, useContext } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";
import { FaqItem } from "@/entities/faq-item";
import { motionFade } from "@/shared/consts/motion";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";
import { InputSearch } from "@/shared/ui/Input";
import { RoleContext } from "@/shared/utils/rolesHelpers";

import { FaqWrapper, LoaderWrapper, HeaderWrapper, FaqList } from "./FaqPage.styled";

export const FaqPage = () => {
  const isFetching = false;
  const foundRoles = useContext(RoleContext);
  const [data, setData] = useState<SectionNestedSchema[]>();

  return (
    <>
      <Helmet>Вопросы и ответы</Helmet>
      {isFetching ? (
        <motion.div {...motionFade} key="loader">
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        </motion.div>
      ) : (
        <motion.div {...motionFade} key="content">
          <FaqWrapper>
            <Typography variant="h1">Вопросы и ответы</Typography>
            <HeaderWrapper withButton={foundRoles?.isContentManagerSM}>
              <InputSearch placeholder="Поиск по вопросам и ответам" fullWidth />
              {foundRoles?.isContentManagerSM && (
                <Link to={Routes.FAQ_CREATE_PAGE}>
                  <Button variant="contained" size="large" fullWidth>
                    Добавить вопрос
                  </Button>
                </Link>
              )}
            </HeaderWrapper>
            <FaqList>
              <FaqItem
                id={1}
                question="Каковы сроки доставки для готовой мебели и для заказов на изготовление?"
                answer="Сроки доставки зависят от конкретного товара и вашего местоположения. Обычно готовая мебель доставляется в течение 1-2 недель, а индивидуальные заказы могут занять от 4 до 8 недель. Важно помнить, что мы всегда стараемся соблюдать заявленные сроки доставки, однако иногда возникают непредвиденные обстоятельства, которые могут повлиять на время доставки. В случае каких-либо изменений мы обязательно свяжемся с вами и предоставим актуальную информацию о статусе вашего заказа."
                isEdit={foundRoles?.isContentManagerSM}
              />
              <FaqItem
                id={2}
                question="Есть ли возможность возврата или обмена мебели, если она не подошла по размерам
                или не устроила по другим причинам?"
                answer="Сроки доставки зависят от конкретного товара и вашего местоположения. Обычно готовая мебель доставляется в течение 1-2 недель, а индивидуальные заказы могут занять от 4 до 8 недель. Важно помнить, что мы всегда стараемся соблюдать заявленные сроки доставки, однако иногда возникают непредвиденные обстоятельства, которые могут повлиять на время доставки. В случае каких-либо изменений мы обязательно свяжемся с вами и предоставим актуальную информацию о статусе вашего заказа."
                isEdit={foundRoles?.isContentManagerSM}
              />
              <FaqItem
                id={2}
                question="Есть ли возможность возврата или обмена мебели, если она не подошла по размерам
                или не устроила по другим причинам? Сроки доставки зависят от конкретного товара и вашего местоположения? Каковы сроки доставки для готовой мебели и для заказов на изготовление?"
                answer="Сроки доставки зависят от конкретного товара и вашего местоположения. Обычно готовая мебель доставляется в течение 1-2 недель, а индивидуальные заказы могут занять от 4 до 8 недель. Важно помнить, что мы всегда стараемся соблюдать заявленные сроки доставки, однако иногда возникают непредвиденные обстоятельства, которые могут повлиять на время доставки. В случае каких-либо изменений мы обязательно свяжемся с вами и предоставим актуальную информацию о статусе вашего заказа. Есть ли возможность возврата или обмена мебели, если она не подошла по размерам
                или не устроила по другим причинам? Сроки доставки зависят от конкретного товара и вашего местоположения. Обычно готовая мебель доставляется в течение 1-2 недель, а индивидуальные заказы могут занять от 4 до 8 недель. Важно помнить, что мы всегда стараемся соблюдать заявленные сроки доставки, однако иногда возникают непредвиденные обстоятельства, которые могут повлиять на время доставки. В случае каких-либо изменений мы обязательно свяжемся с вами и предоставим актуальную информацию о статусе вашего заказа."
                isEdit={foundRoles?.isContentManagerSM}
              />
            </FaqList>
          </FaqWrapper>
        </motion.div>
      )}
    </>
  );
};
