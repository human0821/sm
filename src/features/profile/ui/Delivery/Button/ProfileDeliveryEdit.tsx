import { EditIcon } from "@/assets/icons";
import { useProfileDeliveryUpdate } from "@/features/profile/hooks/useProfileDeliveryUpdate";

import { DeliveryAction } from "./ProfileDelivery.styled";

export function ProfileDeliveryEdit({ address }: ProfileDeliveryForm) {
  const { handleUpdateClick } = useProfileDeliveryUpdate({ address });

  return (
    <DeliveryAction onClick={handleUpdateClick}>
      <EditIcon />
    </DeliveryAction>
  );
}
