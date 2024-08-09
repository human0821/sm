import { useEffect } from "react";

import { ArrowRightIcon } from "@/assets/icons";
import { FormFields } from "@/shared/ui/Auth/Auth.styled";
import FormInput from "@/shared/ui/Form/Input/FormInput";
import InputPassword from "@/shared/ui/Input/Password/InputPassword";
import { PasswordTooltip } from "@/shared/ui/PasswordTooltip";

import { FormSubmit, FormWrapper } from "./ProfileChangePasswordForm.styled";
import { useProfileChangePasswordForm } from "../../hooks/useProfileChangePasswordForm";

export function ProfileChangePasswordForm({ userId, onSuccess }: { userId: string; onSuccess?: () => void }) {
  const {
    control,
    errors,
    handleSubmit,
    isLoading,
    isSuccess,
    isSubmitDisabled,
    onSubmit,
    validationRules,
    reset,
    clearErrors,
  } = useProfileChangePasswordForm({ userId });

  useEffect(() => {
    if (isSuccess) {
      onSuccess?.();
      reset();
      setTimeout(() => {
        clearErrors();
      });
    }
  }, [isSuccess]);

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormFields>
        <FormInput
          controllerProps={{
            name: "password",
            control,
            rules: validationRules.password,
          }}
          error={errors.password}
          input={
            <InputPassword autoComplete="new-password" name="password" label="Текущий пароль" placeholder="••••••••••••" />
          }
        />
        <FormInput
          controllerProps={{
            name: "newPassword",
            control,
            rules: validationRules.newPassword,
          }}
          error={errors.newPassword}
          input={
            <InputPassword
              autoComplete="new-password"
              name="newPassword"
              label={
                <>
                  Новый пароль <PasswordTooltip />
                </>
              }
              placeholder="••••••••••••"
            />
          }
        />
        <FormInput
          controllerProps={{
            name: "newPasswordRepeat",
            control,
            rules: validationRules.newPasswordRepeat,
          }}
          error={errors.newPasswordRepeat}
          input={
            <InputPassword
              autoComplete="new-password"
              name="newPasswordRepeat"
              label="Повторите пароль"
              placeholder="••••••••••••"
            />
          }
        />
      </FormFields>
      <FormSubmit
        type="submit"
        variant="contained"
        size="large"
        loading={isLoading}
        disabled={isSubmitDisabled}
        endIcon={<ArrowRightIcon />}>
        Изменить
      </FormSubmit>
    </FormWrapper>
  );
}
