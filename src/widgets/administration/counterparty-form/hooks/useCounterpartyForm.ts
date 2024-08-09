import type { CounterpartyAddSchema, CounterPartyTypeEnum } from "@/app/api/apiGenerator/common/counterpartyApi";
import type { FieldErrors } from "react-hook-form";

import { useSnackbar } from "notistack";
import { useMemo, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";

import { counterpartyApi } from "@/app/api/apiGenerator/common";
import ValidationErrors from "@/shared/consts/validationErrors";
import { Variants } from "@/shared/consts/variants";

import { counterpartyType } from "../consts/counterpartyType";
import { defaultFormLLC, defaultFormSoleProprietor } from "../consts/form";

export const useCounterpartyForm = () => {
  const [isSentForm, setIsSentForm] = useState(false);
  const { enqueueSnackbar } = useSnackbar();
  const [createCounterparty, { isLoading }] = counterpartyApi.useAddCounterpartyMutation();
  const form = useForm<CounterpartyAddSchema>({
    defaultValues: defaultFormLLC,
  });
  const formBanks = useFieldArray({
    control: form.control,
    name: "accounts",
  });

  const disabled = useMemo<boolean>(() => {
    const data = form.getValues();
    const emptyFields = Object.values(data).some((value) => typeof value === "string" && value.trim().length === 0);
    const emptyBankFields = data.accounts.some((bank) => {
      return Object.values(bank).some((value) => value.trim().length === 0);
    });

    return emptyFields || emptyBankFields;
  }, [form.getValues()]);

  const sendRequest = (body: CounterpartyAddSchema) => {
    createCounterparty({ counterpartyAddSchema: body })
      .unwrap()
      .then(() => setIsSentForm(true))
      .catch((error) =>
        enqueueSnackbar(typeof error.data?.detail === "string" ? error.data.detail : ValidationErrors.UNEXPECTED, {
          variant: Variants.ERROR,
        }),
      );
  };

  const handleError = (errors: FieldErrors<CounterpartyAddSchema>) => {
    const validation = Object.values(errors).filter((item) => !Array.isArray(item));
    validation.forEach((item) => {
      enqueueSnackbar(item.message, { variant: Variants.ERROR });
    });

    if (typeof errors?.accounts !== "undefined" && errors.accounts[0]) {
      const bankValidation = Object.values(errors.accounts[0]) as { message: string }[];
      bankValidation.forEach((item) => {
        enqueueSnackbar(item.message, { variant: Variants.ERROR });
      });
    }
  };

  const changeType = (currentTab: CounterPartyTypeEnum) => {
    const defaultForm = currentTab === counterpartyType.legal ? defaultFormLLC : defaultFormSoleProprietor;
    form.reset({ ...defaultForm, counterpartyType: currentTab });
  };

  form.watch();

  return {
    handleSubmit: form.handleSubmit(sendRequest, handleError),
    form,
    formBanks,
    disabled,
    isSentForm,
    setIsSentForm,
    isLoading,
    changeType,
    type: form.getValues("counterpartyType"),
    isLegal: form.getValues("counterpartyType") === counterpartyType.legal,
  };
};
