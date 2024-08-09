import type { RootState } from "@/app/store";

import { Backdrop, Fade } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import { setModal } from "@/app/store/app/slice";

import { ModalCard, ModalWrapper } from "./ModalGlobalWidget.styled";

export function ModalGlobalWidget() {
  const modal = useSelector((state: RootState) => state.app.modal);
  const dispatch = useDispatch();

  const handleClose = () => {
    dispatch(setModal({ show: false }));
  };

  return (
    <ModalWrapper
      open={modal.show}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}>
      <Fade in={modal.show} timeout={500}>
        <ModalCard>{modal.component}</ModalCard>
      </Fade>
    </ModalWrapper>
  );
}
