import type { FC } from "react";

import { Typography } from "@mui/material";

import { OutlineIcon } from "@/assets/icons";
import { Picture } from "@/shared/ui/Picture/Picture";

import { PromotionContent, PictureWrapper, Period, OutlineWrapper } from "./PromotionCardEntity.styled";

export const PromotionCardEntity: FC<PromotionEntity.PromotionData> = ({ image, title, description, period }) => (
  <div>
    <PictureWrapper>
      <Picture container={{ width: "100%", height: "100%" }} src={image} alt="promotion-item" />
    </PictureWrapper>
    <PromotionContent>
      <Typography>{title}</Typography>
      <Typography>{description}</Typography>
    </PromotionContent>
    <Period>
      <OutlineWrapper>
        <OutlineIcon />
        <Typography>Период:</Typography>
      </OutlineWrapper>
      <Typography>
        {period.date_from} – {period.date_to}
      </Typography>
    </Period>
  </div>
);
