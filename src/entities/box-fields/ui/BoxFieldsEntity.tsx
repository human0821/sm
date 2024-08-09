import type { FC } from "react";

import { BoxFieldsHead, BoxFieldsList, BoxFieldsTitle, BoxFieldsWrapper } from "./BoxFieldsEntity.styled";

export const BoxFieldsEntity: FC<BoxFields> = ({ title, icon, children, background }) => (
  <BoxFieldsWrapper background={background}>
    <BoxFieldsHead>
      <BoxFieldsTitle>{title}</BoxFieldsTitle>
      {icon}
    </BoxFieldsHead>
    <BoxFieldsList>{children}</BoxFieldsList>
  </BoxFieldsWrapper>
);
