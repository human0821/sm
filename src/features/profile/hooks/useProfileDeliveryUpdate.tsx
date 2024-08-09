import { ModalCommonEntity } from "@/entities/modal";
import { useModal } from "@/shared/hooks/useModal";

import { ProfileDeliveryForm } from "../ui/Delivery/Form/ProfileDeliveryForm";

export function useProfileDeliveryUpdate({ address }: ProfileDeliveryForm) {
  const { showModal } = useModal({
    modal: {
      component: (
        <ModalCommonEntity
          title={address ? "Редактировать адрес" : "Добавление адреса"}
          description={address ? "" : "Укажите полный адрес точки доставки, которую вы хотите добавить"}>
          <ProfileDeliveryForm address={address} />
        </ModalCommonEntity>
      ),
    },
  });

  return { handleUpdateClick: showModal };
}
