import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { BlockCardEntity } from "@/entities/block";
import { checkDash } from "@/shared/utils/stringHelpers";

import { InfoWrapper, InfoList, InfoItem, InfoItemKey, InfoItemValue } from "./CounterpartyInfo.styled";

export const CounterpartyInfo = ({ name, email, companyAddress, phone, inn, kpp }: CounterpartiesInfo) => {
  const [content, setContent] = useState<null | { key: string; value: string }[]>(null);

  useEffect(() => {
    setContent([
      {
        key: "Адрес электронной почты",
        value: email || "",
      },
      { key: "Телефон", value: phone || "" },
      { key: "Юридический адрес", value: companyAddress || "" },
      { key: "ИНН", value: inn || "" },
      { key: "КПП", value: kpp || "" },
    ]);
  }, [email, companyAddress, phone, inn, kpp]);

  return (
    <BlockCardEntity>
      <InfoWrapper>
        <Typography variant="h3">{name}</Typography>
        {content && (
          <InfoList>
            {content.map(({ key, value }) => (
              <InfoItem key={key}>
                <InfoItemKey>{key}</InfoItemKey>
                <InfoItemValue>{checkDash(value)}</InfoItemValue>
              </InfoItem>
            ))}
          </InfoList>
        )}
      </InfoWrapper>
    </BlockCardEntity>
  );
};
