import { TrashIcon } from "@/assets/icons";

import { DeliveryAction } from "./ProfileDelivery.styled";
import { useProfileDeliveryDelete } from "../../../hooks/useProfileDeliveryDelete";

export function ProfileDeliveryDelete({ addressId }: ProfileDeliveryDelete) {
  const { deleteHandler } = useProfileDeliveryDelete({ addressId });
  return (
    <DeliveryAction onClick={deleteHandler}>
      <TrashIcon />
    </DeliveryAction>
  );
}
