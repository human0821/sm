import { Box } from "@mui/material";

import { userApi } from "@/app/api/apiGenerator/common";
import { Pagination } from "@/entities/pagination";
import { BonusEntity } from "@/entities/profile/ui/Bonus/BonusEntity";
import { BonusConditionsEntity } from "@/entities/profile/ui/BonusConditions/BonusConditionsEntity";
import { OrderEntity } from "@/entities/profile/ui/Order/OrderEntity";

import { BonusConditionsWrapper, OrdersWrapper, ProfileBonusProgramWrapper } from "./ProfileBonusProgram.styled";
import { BONUS_CONDITIONS, BONUS_PROGRAM } from "../../consts";
import { useOrders } from "../../hooks/useOrders";

export const ProfileBonusProgram: React.FC = () => {
  const orders = useOrders(),
    { data: userProfile } = userApi.useProfileQuery();

  // note: будет получено с бека
  const conditionsText = `
    <p>
      Расчет бонусами может производиться сотрудниками в полном объеме в рамках одного заказа один раз, но
      с возможностью отмены и использования повторно.
    </p>
    <p>
      Бонусные баллы являются накопительными (не обнуляются со временем и могут использоваться в любом объеме
      по усмотрению Покупателя).
    </p>
    <p>
      Условия использования накопленных бонусных баллов:Бонусные баллы являются накопительными (не обнуляются
      со временем и могут использоваться в любом объеме в документе «Заказ поставщику» на Ваше усмотрение).
      <br/> Начисление бонусов осуществляется сразу после закрытия «Заказа поставщику» (Заказ отгружен в полном объеме
      (с учетом Возвратов) и полностью оплачен Партнером).<br/> Размер бонуса за закрытый заказ составляет 15% от суммы
      заказа согласно условиям действующей на момент создания «Заказа поставщику» бонусной программы.
    </p>
  `;

  return (
    <ProfileBonusProgramWrapper>
      <OrdersWrapper>
        <BonusEntity title={BONUS_PROGRAM} value={userProfile?.bonus.count ? `${userProfile?.bonus.count}` : "0"} />
        {orders.map(({ type, order, date, price, items }) => (
          <OrderEntity key={order} type={type} order={order} date={date} price={price} items={items} />
        ))}
        <Box mt={4}>
          <Pagination count={5} position="center" />
        </Box>
      </OrdersWrapper>
      <BonusConditionsWrapper>
        <BonusConditionsEntity title={BONUS_CONDITIONS} text={conditionsText} />
      </BonusConditionsWrapper>
    </ProfileBonusProgramWrapper>
  );
};
