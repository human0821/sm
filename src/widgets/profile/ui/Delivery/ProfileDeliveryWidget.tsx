import { Typography } from "@mui/material";

import { partnersApi } from "@/app/api/apiGenerator/common";
import { BlockEmptyEntity } from "@/entities/block";
import { ProfileDeliveryEntity } from "@/entities/profile";
import { ProfileDeliveryAdd, ProfileDeliveryDelete, ProfileDeliveryEdit } from "@/features/profile";

import {
  DeliveryActions,
  DeliveryEmpty,
  DeliveryEmptyText,
  DeliveryHeader,
  DeliveryList,
  DeliveryWrapper,
} from "./ProfileDeliveryWidget.styled";

export function ProfileDeliveryWidget({ canEdit }: { canEdit?: boolean }) {
  const { data: deliveryList } = partnersApi.useGetListOfAddressesQuery();

  return (
    <DeliveryWrapper>
      <DeliveryHeader>
        <Typography variant="h5">Точки доставки</Typography>
        {canEdit && <ProfileDeliveryAdd />}
      </DeliveryHeader>
      {deliveryList && deliveryList.length === 0 ? (
        <DeliveryEmpty>
          <BlockEmptyEntity>
            <DeliveryEmptyText>Нет адресов точек доставки</DeliveryEmptyText>
          </BlockEmptyEntity>
        </DeliveryEmpty>
      ) : (
        <DeliveryList>
          {deliveryList &&
            deliveryList.map((delivery, index) => (
              <ProfileDeliveryEntity index={index + 1} address={delivery} key={delivery.id}>
                {canEdit && (
                  <DeliveryActions>
                    <ProfileDeliveryEdit address={delivery} />
                    <ProfileDeliveryDelete addressId={delivery.id} />
                  </DeliveryActions>
                )}
              </ProfileDeliveryEntity>
            ))}
        </DeliveryList>
      )}
    </DeliveryWrapper>
  );
}
