import { BlockEmptyEntity } from "@/entities/block";

import {
  OrdersListWrapper,
  OrdersListHead,
  OrdersListContent,
  OrdersListEmpty,
  Title,
} from "./CounterpartiesOrdersList.styled";

export const CounterpartiesOrdersList = () => {
  return (
    <OrdersListWrapper>
      <OrdersListHead>
        <Title variant="h3">Заказы</Title>
      </OrdersListHead>
      <OrdersListContent>
        <OrdersListEmpty>
          <BlockEmptyEntity size="h2" title="Данные отсутствуют" />
        </OrdersListEmpty>
      </OrdersListContent>
    </OrdersListWrapper>
  );
};
