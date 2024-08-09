import type { ModalEntity } from "@/entities/modal/types";
import type { SubmitHandler } from "react-hook-form";

import { useMemo } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { partnersApi } from "@/app/api/apiGenerator/common";
import { setModal } from "@/app/store/app/slice";
import { ModalDialogEntity, ModalDialogTypes } from "@/entities/modal";
import ValidationErrors from "@/shared/consts/validationErrors";
import { useModal } from "@/shared/hooks/useModal";

export function useProfileDeliveryForm({ address }: ProfileDeliveryForm) {
  const [createAddress, { isLoading: createLoading }] = partnersApi.usePostAddressMutation();
  const [updateAddress, { isLoading: updateLoading }] = partnersApi.usePutAddressMutation();
  const dispatch = useDispatch();

  const successDialogProps: ModalEntity.Dialog = {
    title: `Адрес ${address?.id ? "сохранен" : "добавлен"}`,
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

  const { showModal: showSuccessModal } = useModal({
    modal: {
      component: <ModalDialogEntity {...successDialogProps} />,
    },
  });

  const {
    control,
    handleSubmit,
    getValues,
    formState: { errors, isValid, isDirty },
    setError,
  } = useForm<{ address: string }>({
    defaultValues: {
      address: address?.address || "",
    },
    mode: "onChange",
  });

  const validationRule = {
    required: ValidationErrors.REQUIRED,
  };

  const onSubmit: SubmitHandler<{ address: string }> = (data) => {
    return (
      address?.id
        ? updateAddress({ partnerAddressSchema: { id: address.id, address: data.address } })
        : createAddress({ partnerAddressCreateSchema: { address: data.address } })
    )
      .unwrap()
      .then(() => {
        showSuccessModal();
      })
      .catch(() => {
        setError("root", { type: "custom", message: ValidationErrors.UNEXPECTED });
      });
  };

  const isSubmitDisabled = useMemo(() => {
    return (!isDirty && !getValues("address")) || !isValid || Boolean(errors.address);
  }, [isDirty, isValid, errors.address]);

  return {
    control,
    handleSubmit,
    onSubmit,
    errors,
    validationRule,
    isLoading: createLoading || updateLoading,
    isSubmitDisabled,
  };
}
