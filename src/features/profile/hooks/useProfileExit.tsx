import type { ModalEntity } from "@/entities/modal/types";

import { useDispatch } from "react-redux";

import { setModal } from "@/app/store/app/slice";
import { ModalDialogEntity, ModalDialogTypes } from "@/entities/modal";
import { useModal } from "@/shared/hooks/useModal";

import { useProfileAction } from "./useProfileAction";

export function useProfileExit() {
  const dispatch = useDispatch();
  const { logout } = useProfileAction();

  const exitDialogProps: ModalEntity.Dialog = {
    title: "Вы действительно хотите выйти из профиля?",
    type: ModalDialogTypes.QUESTION,
    buttons: [
      {
        children: "Нет",
        type: "button",
        variant: "contained",
        onClick: () => dispatch(setModal({ show: false })),
      },
      {
        children: "Да",
        type: "button",
        variant: "outlined",
        onClick: () => {
          logout();
          dispatch(setModal({ show: false }));
        },
      },
    ],
  };

  const { showModal } = useModal({
    modal: {
      component: <ModalDialogEntity {...exitDialogProps} />,
    },
  });

  return { showExitModal: showModal };
}
