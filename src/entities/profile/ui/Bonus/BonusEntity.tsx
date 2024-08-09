import { BonusAmount } from "@/shared/ui/BonusAmount/BonusAmount";

import { BonusPrice, BonusTitle, BonusWrapper } from "./BonusEntity.styled";

export const BonusEntity: React.FC<ProfileEntity.BonusData> = ({ title, value }) => {
  return (
    <BonusWrapper>
      <BonusTitle>{title}</BonusTitle>
      <BonusPrice>
        <BonusAmount value={value} />
      </BonusPrice>
    </BonusWrapper>
  );
};
