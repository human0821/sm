import type { SubmitHandler } from "react-hook-form";

import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { useChangeProfilePasswordMutation } from "@/app/api/user/api";
import ValidationErrors from "@/shared/consts/validationErrors";
import { VALIDATION_PASSWORD } from "@/shared/consts/validationPatterns";

export function useProfileChangePasswordForm({ userId }: { userId: string }) {
  const [changePassword, { isLoading, isSuccess }] = useChangeProfilePasswordMutation();

  const {
    control,
    handleSubmit,
    formState: { errors, dirtyFields },
    setError,
    clearErrors,
    watch,
    reset,
  } = useForm<ProfileChangePasswordForm>({
    defaultValues: {
      password: "",
      newPassword: "",
      newPasswordRepeat: "",
    },
    mode: "onChange",
  });

  const validationRules = {
    password: {
      required: ValidationErrors.REQUIRED,
    },
    newPassword: {
      required: ValidationErrors.REQUIRED,
      minLength: {
        value: VALIDATION_PASSWORD.minLength,
        message: `Пароль должен быть не меньше ${VALIDATION_PASSWORD.minLength} символов`,
      },
      maxLength: {
        value: VALIDATION_PASSWORD.maxLength,
        message: `Пароль должен быть не более ${VALIDATION_PASSWORD.maxLength} символов`,
      },
      pattern: {
        value: VALIDATION_PASSWORD.regExp,
        message: ValidationErrors.INCORRECT,
      },
    },
    newPasswordRepeat: {
      required: ValidationErrors.REQUIRED,
    },
  };

  useEffect(() => {
    watch((values) => {
      if (values.password === values.newPassword) {
        setTimeout(() => {
          setError("newPassword", { type: "error", message: ValidationErrors.DIFFERENT_PASSWORD });
        });
      } else {
        clearErrors("newPassword");
      }

      if (values.newPassword === values.newPasswordRepeat) {
        clearErrors("newPasswordRepeat");
      } else {
        setTimeout(() => {
          setError("newPasswordRepeat", { type: "error", message: ValidationErrors.SAME_PASSWORD });
        });
      }
    });
  }, [watch]);

  const isSubmitDisabled =
    Object.keys(dirtyFields).length < 3 ||
    (Object.keys(errors).length !== 0 && errors.newPassword?.type !== "custom" && errors.password?.type !== "custom");

  const onSubmit: SubmitHandler<ProfileChangePasswordForm> = async (data) => {
    if (userId) {
      await changePassword({
        userId,
        password: data.password,
        newPassword: data.newPassword,
      })
        .unwrap()
        .catch((error: ApiErrorResponse) => {
          if (typeof error?.data?.detail === "object") {
            if (error.data.detail.password) {
              setError("password", { type: "custom", message: error.data.detail.password || ValidationErrors.UNEXPECTED });
            } else {
              setError("newPassword", {
                type: "custom",
                message: error.data.detail.newPassword || ValidationErrors.UNEXPECTED,
              });
            }
          } else {
            setError("password", { type: "custom", message: error.data.detail || ValidationErrors.UNEXPECTED });
          }
          throw new Error(JSON.stringify(error));
        });
    }
  };

  return {
    control,
    handleSubmit,
    errors,
    onSubmit,
    validationRules,
    isSubmitDisabled,
    isLoading,
    isSuccess,
    reset,
    clearErrors,
  };
}
