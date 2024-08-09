import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

import { setModal } from "@/app/store/app/slice";
import { ModalDialogEntity, ModalDialogTypes } from "@/entities/modal";
import { useModal } from "@/shared/hooks/useModal";

import { ProfileDeliveryDeleteDialog } from "../ui/Delivery/Button";

export function useProfileDeliveryDelete({ addressId }: ProfileDeliveryDelete) {
  const dispatch = useDispatch();

  const { showModal } = useModal({
    modal: {
      component: (
        <ModalDialogEntity title={"Вы действительно\nхотите удалить адрес доставки?"} type={ModalDialogTypes.DELETE}>
          <>
            <Button size="large" type="button" variant="contained" onClick={() => dispatch(setModal({ show: false }))}>
              Нет
            </Button>
            <ProfileDeliveryDeleteDialog addressId={addressId} />
          </>
        </ModalDialogEntity>
      ),
    },
  });

  return {
    deleteHandler: showModal,
  };
}
