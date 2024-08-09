import { Typography } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { BankIcon } from "@/assets/icons";
import { motionFadeFlex } from "@/shared/consts/motion";
import { Tag } from "@/shared/ui/Tag/Tag";
import { checkDash } from "@/shared/utils/stringHelpers";

import {
  InfoWrapper,
  InfoList,
  InfoItem,
  InfoItemKey,
  InfoItemValue,
  InfoEmptyText,
  InfoHeader,
  InfoAccountButton,
  InfoAccountWrapper,
} from "./CounterpartyInfo.styled";

export const CounterpartyInfoAccountEntity = ({
  data,
  buttonLoading,
  mainFlag,
  onMainFlag,
}: CounterpartiesInfoAccountEntity) => {
  const [content, setContent] = useState<null | { key: string; value: string }[]>(null);

  useEffect(() => {
    if (data)
      setContent([
        {
          key: "Наименование банка",
          value: data.bank,
        },
        { key: "Расчетный счет", value: data.checkingAccount },
        { key: "Корреспондентский счет", value: data.corrAccount },
        { key: "БИК Банк", value: data.bik },
      ]);
  }, [data]);

  return (
    <InfoAccountWrapper>
      <InfoWrapper>
        <InfoHeader>
          <Typography variant="h4">Банковский счет</Typography>
          {data && (
            <>
              {mainFlag ? (
                <motion.div {...motionFadeFlex} key="main">
                  <Tag name="Основной" isImportant icon={<BankIcon />} />
                </motion.div>
              ) : (
                <motion.div {...motionFadeFlex} key="nomain">
                  <InfoAccountButton size="small" loading={buttonLoading} onClick={onMainFlag} startIcon={<></>}>
                    Сделать основным
                  </InfoAccountButton>
                </motion.div>
              )}
            </>
          )}
        </InfoHeader>
        {content ? (
          <InfoList>
            {content.map(({ key, value }) => (
              <InfoItem key={key}>
                <InfoItemKey>{key}</InfoItemKey>
                <InfoItemValue>{checkDash(value)}</InfoItemValue>
              </InfoItem>
            ))}
          </InfoList>
        ) : (
          <InfoEmptyText>Данные отсутствуют</InfoEmptyText>
        )}
      </InfoWrapper>
    </InfoAccountWrapper>
  );
};
