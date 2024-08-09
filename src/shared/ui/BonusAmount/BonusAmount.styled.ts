import { styled } from "@mui/material";

import { Colors } from "@/app/styles";

import { BonusAmountVariant } from "./BonusAmount";

export const Wrapper = styled("div")<Pick<BonusAmount<BonusAmountVariant>, "variant">>`
  ${(props) => props.variant === BonusAmountVariant.GREY && `color: ${Colors.GREY_MAIN};`}
  ${(props) => props.variant === BonusAmountVariant.GREEN && `color: ${Colors.GREEN_MAIN};`}
  ${(props) => props.variant === BonusAmountVariant.RED && `color: ${Colors.RED_MAIN};`}
  
  svg {
    position: relative;
    top: 3px;
  }
`;
