import type { ModalEntity } from "@/entities/modal/types";

import { useSnackbar } from "notistack";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// import { counterpartyApi } from "@/app/api/apiGenerator/common";
import { setModal } from "@/app/store/app/slice";
import { ModalDialogEntity, ModalDialogTypes } from "@/entities/modal";
import { Variants } from "@/shared/consts/variants";

export function useActivationActions({
  activateBodyField,
  currentIsActive,
  id,
  withResultModal,
  useActivationMutation,
  setCurrentIsActive,
  setIsActive,
  name,
  withTag,
  forDeactivation,
  setCurrentForDeactivation,
}: Activation.ActionsHook) {
  const dispatch = useDispatch();
  const [activateMutation, activateMutationState] = useActivationMutation();
  // const [forDeactivate, forDeactivateState] = counterpartyApi.useForDeactivationCounterpartyMutation();
  const { enqueueSnackbar } = useSnackbar();

  const activationSuccessProps: ModalEntity.Dialog = {
    title:
      forDeactivation === undefined
        ? `${name.charAt(0).toUpperCase() + name.slice(1)} ${currentIsActive ? "деактивирован" : "активирован"}`
        : `Запрос на ${currentIsActive ? "деактивацию" : "активацию"} отправлен`,
    type: ModalDialogTypes.SUCCESS,
    buttons: [
      {
        children: "Закрыть",
        type: "button",
        variant: "contained",
        onClick: () => dispatch(setModal({ show: false })),
      },
    ],
  };

  useEffect(() => {
    if (activateMutationState.isSuccess) {
      setCurrentIsActive(!currentIsActive);
      if (setIsActive) setIsActive(!currentIsActive);
      if (forDeactivation !== undefined) {
        setCurrentForDeactivation(true);
      }

      if (withResultModal) {
        dispatch(
          setModal({
            show: true,
            component: <ModalDialogEntity {...activationSuccessProps} />,
          }),
        );
      } else {
        dispatch(setModal({ show: false }));
      }
    }
    if (activateMutationState.isError) {
      enqueueSnackbar(
        typeof activateMutationState.error.data?.detail === "string"
          ? activateMutationState.error.data?.detail
          : activateMutationState.error.data?.detail[0].msg || "При выполнении запроса что-то не так",
        {
          variant: Variants.ERROR,
        },
      );
    }
  }, [activateMutationState]);

  const handleClick = () => {
    // forDeactivate({
    //   counterpartyId: String(id),
    // });
    activateMutation({
      id,
      body: { [activateBodyField || "is_active"]: activateBodyField ? currentIsActive : !currentIsActive },
      withTag,
    });
  };

  return {
    handleClick,
    isLoading: activateMutationState.isLoading,
  };
}
