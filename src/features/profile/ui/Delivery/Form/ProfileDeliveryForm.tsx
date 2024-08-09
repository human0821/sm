import { useProfileDeliveryForm } from "@/features/profile/hooks/useProfileDeliveryForm";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";
import FormInput from "@/shared/ui/Form/Input/FormInput";

import { FormTextField, FormWrapper } from "./ProfileDeliveryForm.styled";

export function ProfileDeliveryForm({ address }: ProfileDeliveryForm) {
  const { control, handleSubmit, onSubmit, errors, isLoading, validationRule, isSubmitDisabled } = useProfileDeliveryForm({
    address,
  });

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <FormInput
        controllerProps={{
          name: "address",
          control,
          rules: validationRule,
        }}
        error={errors.address || errors.root}
        input={<FormTextField name="partner_address" label="Адрес точки доставки" placeholder="Введите адрес" />}
      />
      <ButtonLoading size="large" type="submit" variant="contained" loading={isLoading} disabled={isSubmitDisabled}>
        {address ? "Сохранить" : "Добавить"}
      </ButtonLoading>
    </FormWrapper>
  );
}
