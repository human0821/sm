import { DeliveryAddress, DeliveryIndex, DeliveryWrapper } from "./ProfileDeliveryEntity.styled";

export function ProfileDeliveryEntity({ index, address, children }: ProfileEntity.DeliveryComponent) {
  return (
    <DeliveryWrapper>
      <DeliveryIndex>{index}.</DeliveryIndex>
      <DeliveryAddress>{address.address}</DeliveryAddress>
      {children}
    </DeliveryWrapper>
  );
}
