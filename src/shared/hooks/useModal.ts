import { useDispatch } from "react-redux";

import { setModal } from "@/app/store/app/slice";

export function useModal({ modal }: { modal?: Omit<StoreApp.Modal, "show"> } = {}) {
  const dispatch = useDispatch();

  const showModal = () => {
    if (modal) {
      dispatch(
        setModal({
          ...modal,
          show: true,
        }),
      );
    }
  };

  const closeModal = () => {
    dispatch(setModal({ show: false }));
  };

  return { showModal, closeModal };
}
