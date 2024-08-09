import { Stack } from "@mui/material";

import { BonusAmount, BonusAmountVariant } from "@/shared/ui/BonusAmount/BonusAmount";
import { Picture } from "@/shared/ui/Picture/Picture";

import {
  LeftWrapper,
  Order,
  OrderDate,
  OrderItems,
  OrderNumber,
  OrderPendingText,
  OrderPrice,
  OrderTopWrapper,
} from "./OrderEntity.styled";

export const OrderEntity: React.FC<ProfileEntity.OrderData> = ({ type, order, date, price, items }) => {
  return (
    <Order key={order}>
      <OrderTopWrapper>
        <LeftWrapper>
          <Stack direction={"row"} spacing={1} justifyContent={"space-between"}>
            <OrderNumber>Заказ №{order}</OrderNumber>
            <OrderPrice>
              <BonusAmount value={price} size={18} variant={type} />
            </OrderPrice>
          </Stack>
          <Stack direction={"row"} spacing={1} justifyContent={"space-between"}>
            <OrderDate>от {date}</OrderDate>
            {type === BonusAmountVariant.GREY && <OrderPendingText>Ожидает начисления 12 января</OrderPendingText>}
          </Stack>
        </LeftWrapper>
      </OrderTopWrapper>
      <OrderItems>
        {items.map((item, index) => (
          <Picture key={index} width={150} height={100} src={item} />
        ))}
      </OrderItems>
    </Order>
  );
};
