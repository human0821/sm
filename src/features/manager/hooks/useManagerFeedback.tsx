import type { RootState } from "@/app/store";
import type { SubmitHandler } from "react-hook-form";

import { useSnackbar } from "notistack";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

import { useConnectToManagerMutation } from "@/app/api/partners/api";
import { ModalCommonEntity, ModalDialogEntity, ModalDialogTypes } from "@/entities/modal";
import ValidationErrors from "@/shared/consts/validationErrors";
import { VALIDATION_PATTERN_EMAIL } from "@/shared/consts/validationPatterns";
import { Variants } from "@/shared/consts/variants";
import { useModal } from "@/shared/hooks/useModal";

import { ManagerFeedbackForm } from "../ui/Feedback/Form/ManagerFeedbackForm";

export function useManagerFeedback() {
  const user = useSelector((state: RootState) => state.user.user);
  const [sendFeedback, { isLoading }] = useConnectToManagerMutation();
  const { enqueueSnackbar } = useSnackbar();
  const { closeModal, showModal } = useModal({
    modal: {
      component: (
        <ModalCommonEntity
          title="Задать вопрос"
          description="Пожалуйста, опишите проблему, мы свяжемся с вами в ближайшее время">
          <ManagerFeedbackForm />
        </ModalCommonEntity>
      ),
    },
  });

  const { showModal: showSuccessModal } = useModal({
    modal: {
      component: (
        <ModalDialogEntity
          title="Вопрос отправлен"
          type={ModalDialogTypes.SUCCESS}
          buttons={[
            {
              variant: "contained",
              children: "Закрыть",
              onClick: closeModal,
            },
          ]}
        />
      ),
    },
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<ManagerFeedback.Form>({
    defaultValues: {
      email: user?.email || "",
      text: "",
    },
    mode: "onChange",
  });

  const validationRules = {
    email: {
      required: ValidationErrors.REQUIRED,
      pattern: {
        value: VALIDATION_PATTERN_EMAIL,
        message: ValidationErrors.EMAIL,
      },
    },
    text: {
      required: ValidationErrors.REQUIRED,
    },
  };

  const onSubmit: SubmitHandler<ManagerFeedback.Form> = (data) => {
    sendFeedback(data)
      .unwrap()
      .then(() => {
        showSuccessModal();
      })
      .catch(() => {
        enqueueSnackbar(ValidationErrors.UNEXPECTED, {
          variant: Variants.ERROR,
        });
      });
  };

  return {
    control,
    handleSubmit,
    showModal,
    validationRules,
    errors,
    isValid,
    onSubmit,
    isLoading,
  };
}
