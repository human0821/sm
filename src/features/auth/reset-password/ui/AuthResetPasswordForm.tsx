import { Stack, TextField } from "@mui/material";

import { ArrowRightIcon } from "@/assets/icons";
import { Form, FormFields } from "@/shared/ui/Auth/Auth.styled";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";
import FormInput from "@/shared/ui/Form/Input/FormInput";

import { useAuthChangePassword } from "../hooks/useAuthResetPassword";

export function AuthResetPasswordForm() {
  const { control, handleSubmit, errors, onSubmit, validationRules, isSubmitDisabled, isFetching } =
    useAuthChangePassword();

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Stack gap={2.5}>
        <FormFields>
          <FormInput
            controllerProps={{
              name: "email",
              control,
              rules: validationRules.email,
            }}
            error={errors.email}
            input={<TextField name="email" label="Электронная почта" placeholder="example@example.com" />}
          />
        </FormFields>
      </Stack>
      <ButtonLoading
        type="submit"
        sx={{ justifyContent: "space-between" }}
        variant="contained"
        endIcon={<ArrowRightIcon />}
        disabled={isSubmitDisabled}
        loading={isFetching}
        onSubmit={handleSubmit(onSubmit)}>
        Отправить
      </ButtonLoading>
    </Form>
  );
}
