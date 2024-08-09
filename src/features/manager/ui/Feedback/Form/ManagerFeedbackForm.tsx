import { TextField } from "@mui/material";

import { useManagerFeedback } from "@/features/manager/hooks/useManagerFeedback";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";
import FormInput from "@/shared/ui/Form/Input/FormInput";

import { FormWrapper } from "./ManagerFeedbackForm.styled";

export function ManagerFeedbackForm() {
  const { control, validationRules, errors, handleSubmit, onSubmit, isValid, isLoading } = useManagerFeedback();

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        controllerProps={{
          name: "email",
          control,
          rules: validationRules.email,
        }}
        error={errors.email}
        input={<TextField name="email" label="Адрес электронной почты" placeholder="example@example.com" />}
      />
      <FormInput
        controllerProps={{
          name: "text",
          control,
          rules: validationRules.text,
        }}
        error={errors.text}
        input={<TextField multiline label="Текст сообщения" placeholder="Введите вопрос" minRows={5} maxRows={5} />}
      />
      <ButtonLoading size="large" loading={isLoading} type="submit" variant="contained" disabled={!isValid}>
        Отправить
      </ButtonLoading>
    </FormWrapper>
  );
}
