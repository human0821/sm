import { Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setModal } from "@/app/store/app/slice";
import { ModalDialogEntity, ModalDialogTypes } from "@/entities/modal";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";

export function useFaqDeleteButton({ id }: { id: FacItem["id"] }) {
  const dispatch = useDispatch();

  const deleteHandle = () => {
    dispatch(
      setModal({
        show: true,
        component: (
          <ModalDialogEntity title={"Вы действительно хотите удалить вопрос?"} type={ModalDialogTypes.QUESTION}>
            <>
              <Button type="button" variant="contained" onClick={() => dispatch(setModal({ show: false }))}>
                Нет
              </Button>
              <ButtonLoading
                type="button"
                variant="outlined"
                // loading={isLoading} onClick={handleClick}
              >
                Да
              </ButtonLoading>
            </>
          </ModalDialogEntity>
        ),
      }),
    );
  };

  return {
    deleteHandle,
  };
}
