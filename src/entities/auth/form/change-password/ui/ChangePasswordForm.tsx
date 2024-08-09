import { Stack, Typography } from "@mui/material";
import { useLayoutEffect } from "react";

import Colors from "@/app/styles/colors";
import { ArrowRightIcon } from "@/assets/icons";
import { CONTENT_PASSWORD_RULES } from "@/shared/consts/content";
import { FormFields, Form } from "@/shared/ui/Auth/Auth.styled";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";
import FormInput from "@/shared/ui/Form/Input/FormInput";
import InputPassword from "@/shared/ui/Input/Password/InputPassword";
import { PasswordTooltip } from "@/shared/ui/PasswordTooltip";

import { Wrapper } from "./ChangePasswordForm.styled";
import { useChangePassword } from "../hooks/useChangePassword";

export const ChangePasswordForm = ({
  isLoading,
  onSubmit,
  error,
  align = "center",
  showRules,
  sx,
  isSuccess,
  disbledFields,
}: ChangePasswordForm) => {
  const { control, handleSubmit, errors, validationRules, isDisabled, setError } = useChangePassword(isSuccess);

  useLayoutEffect(() => {
    if (error) setError(error.name, error.error, error.options);
  }, [error]);

  return (
    <Wrapper>
      <Stack gap={2.5}>
        <Typography variant="h3" align={align}>
          Смена пароля
        </Typography>
        {showRules && (
          <Typography variant="subtitle1" style={{ color: Colors.GREY_MAIN }}>
            {CONTENT_PASSWORD_RULES}
          </Typography>
        )}
      </Stack>
      <Form onSubmit={handleSubmit(onSubmit)} sx={sx}>
        <Stack gap={2.5}>
          <FormFields>
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
                  disabled={disbledFields}
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
                  disabled={disbledFields}
                />
              }
            />
          </FormFields>
        </Stack>
        <ButtonLoading
          type="submit"
          sx={{ justifyContent: "space-between" }}
          variant="contained"
          endIcon={<ArrowRightIcon />}
          disabled={isDisabled || disbledFields}
          loading={isLoading}
          onSubmit={handleSubmit(onSubmit)}>
          Изменить
        </ButtonLoading>
      </Form>
    </Wrapper>
  );
};
