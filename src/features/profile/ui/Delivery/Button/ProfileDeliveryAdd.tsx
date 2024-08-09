import { PlusBorderlessIcon } from "@/assets/icons";

import { DeliveryAdd } from "./ProfileDelivery.styled";
import { useProfileDeliveryUpdate } from "../../../hooks/useProfileDeliveryUpdate";

export function ProfileDeliveryAdd() {
  const { handleUpdateClick } = useProfileDeliveryUpdate({});

  return (
    <DeliveryAdd startIcon={<PlusBorderlessIcon />} onClick={handleUpdateClick}>
      Добавить адрес
    </DeliveryAdd>
  );
}
