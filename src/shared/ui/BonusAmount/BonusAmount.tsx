import { MoneyBagIcon } from "@/assets/icons";
import { splitNumber } from "@/shared/utils/stringHelpers";

import { Wrapper } from "./BonusAmount.styled";

export enum BonusAmountVariant {
  RED = "red",
  GREEN = "green",
  GREY = "grey",
}

export const BonusAmount: React.FC<BonusAmount<BonusAmountVariant>> = ({ value, variant }) => {
  return (
    <Wrapper variant={variant}>
      <span>
        {value[0] === "+" ? "+" : ""}
        {splitNumber(value)}
      </span>
      <MoneyBagIcon />
    </Wrapper>
  );
};
