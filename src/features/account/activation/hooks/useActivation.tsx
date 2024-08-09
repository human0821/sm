import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { setModal } from "@/app/store/app/slice";
import { ModalDialogEntity, ModalDialogTypes } from "@/entities/modal";

import { ActivationButtonDialog } from "../ui/ActivationButtonDialog";

export function useActivation({
  isActive,
  useActivationMutation,
  id,
  name,
  withResultModal,
  activateBodyField,
  setIsActive,
  withTag,
  forDeactivation,
}: Activation.Hook) {
  const dispatch = useDispatch();
  const [currentIsActive, setCurrentIsActive] = useState(isActive);
  const [currentForDeactivation, setCurrentForDeactivation] = useState(forDeactivation);

  useEffect(() => {
    if (isActive !== currentIsActive) {
      setCurrentIsActive(isActive);
      if (setIsActive) setIsActive(isActive);
    }
  }, [isActive]);

  useEffect(() => {
    if (forDeactivation !== currentForDeactivation) {
      setCurrentForDeactivation(forDeactivation);
    }
  }, [forDeactivation]);

  const activateAccount = () => {
    dispatch(
      setModal({
        show: true,
        component: (
          <ModalDialogEntity
            title={`Вы действительно хотите ${currentIsActive ? "деактивировать" : "активировать"} ${name}а?`}
            type={ModalDialogTypes.QUESTION}>
            <>
              <Button type="button" variant="contained" onClick={() => dispatch(setModal({ show: false }))}>
                Нет
              </Button>
              <ActivationButtonDialog
                id={id}
                currentIsActive={currentIsActive}
                setCurrentIsActive={setCurrentIsActive}
                useActivationMutation={useActivationMutation}
                withResultModal={withResultModal}
                activateBodyField={activateBodyField}
                setIsActive={setIsActive}
                name={name}
                withTag={withTag}
                forDeactivation={currentForDeactivation}
                setCurrentForDeactivation={setCurrentForDeactivation}
              />
            </>
          </ModalDialogEntity>
        ),
      }),
    );
  };

  return {
    activateAccount,
    currentIsActive,
    currentForDeactivation,
  };
}
