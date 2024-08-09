import { BonusConditionsText, BonusConditionsTitle, BonusConditions } from "./BonusConditionsEntity.styled";

export const BonusConditionsEntity: React.FC<ProfileEntity.BonusConditionsData> = ({ text, title }) => {
  return (
    <BonusConditions>
      <BonusConditionsTitle>{title}</BonusConditionsTitle>
      <BonusConditionsText dangerouslySetInnerHTML={{ __html: text }} />
    </BonusConditions>
  );
};
