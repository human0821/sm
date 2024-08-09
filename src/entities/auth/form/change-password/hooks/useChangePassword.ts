import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { FIELDS } from "@/shared/consts/fields";
import ValidationErrors from "@/shared/consts/validationErrors";

export function useChangePassword(isSuccess?: boolean) {
  const {
    control,
    handleSubmit,
    formState: { errors, isDirty },
    setError,
    clearErrors,
    watch,
    reset,
  } = useForm<AuthChangePasswordForm>({
    defaultValues: {
      newPassword: "",
      newPasswordRepeat: "",
    },
    mode: "onChange",
  });

  const validationRules = {
    newPassword: {
      required: ValidationErrors.REQUIRED,
      ...FIELDS.password.validation,
    },
    newPasswordRepeat: {
      required: ValidationErrors.REQUIRED,
    },
  };

  useEffect(() => {
    watch((values) => {
      if (values.newPassword === values.newPasswordRepeat) {
        clearErrors("newPasswordRepeat");
      } else {
        setTimeout(() => {
          setError("newPasswordRepeat", { type: "custom", message: ValidationErrors.SAME_PASSWORD });
        });
      }
    });
  }, [watch]);

  useEffect(() => {
    if (isSuccess) {
      reset();
      setTimeout(() => {
        clearErrors();
      });
    }
  }, [isSuccess]);

  const isDisabled = !isDirty || (isDirty && Object.keys(errors).length !== 0 && errors.newPassword?.type !== "custom");

  return {
    control,
    handleSubmit,
    errors,
    validationRules,
    isDisabled,
    setError,
  };
}
