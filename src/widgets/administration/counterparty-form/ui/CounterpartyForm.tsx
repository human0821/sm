import type { AccountCounterPartyAddSchema } from "@/app/api/apiGenerator/common/counterpartyApi";
import type { ChangeEvent } from "react";

import { Button, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { counterpartyApi } from "@/app/api/apiGenerator/common";
import Routes from "@/app/routes/consts/routes";
import { Colors } from "@/app/styles";
import { PlusBorderlessIcon, DeleteIcon } from "@/assets/icons";
import { BoxFieldsEntity } from "@/entities/box-fields";
import { ModalDialogTypes } from "@/entities/modal";
import { BikBankSuggest } from "@/features/suggests/BikBankSuggest";
import { InnSuggest } from "@/features/suggests/InnSuggest";
import { FIELDS } from "@/shared/consts/fields";
import CustomDialog from "@/shared/ui/DialogBox/DialogBox";
import { EmailField, PhoneField } from "@/shared/ui/Fields";
import { SelectMui } from "@/shared/ui/Select/MuiSelect";
import { Tabs } from "@/shared/ui/Tabs/Tabs";
import { parseForSelect } from "@/shared/utils/parseForSelect";

import { FieldsWrapper, Form, InputList, SendButton, Title, Wrapper } from "./CounterpartyForm.styled";
import { documentFlowOptions } from "../consts/documentFlow";
import { defaultFormBank } from "../consts/form";
import { tabList } from "../consts/tabList";
import { useCounterpartyForm } from "../hooks/useCounterpartyForm";

export const CounterpartyForm = () => {
  const navigate = useNavigate();
  const [modalDeleteBank, setModalDeleteBank] = useState<null | number>(null);
  const { handleSubmit, form, formBanks, disabled, isSentForm, setIsSentForm, changeType, isLoading, type, isLegal } =
    useCounterpartyForm();
  const { data: taxSystem, isLoading: isTaxSystemLoading } = counterpartyApi.useGetTaxSystemQuery({
    counterpartyType: type,
  });

  const errors = Object.keys(form.formState.errors);

  const checkBankField = (key: keyof AccountCounterPartyAddSchema, index: number): boolean => {
    const bankErrors = form.formState.errors.accounts;
    if (typeof bankErrors !== "undefined" && typeof bankErrors[index] !== "undefined") {
      const bankKeys = Object.keys(bankErrors[index]) as (keyof AccountCounterPartyAddSchema)[];
      return bankKeys.includes(key);
    }
    return false;
  };

  const parseToNumber = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    FIELDS.onlyNumber(event.target.value);

  const setInnData = ({ data, value }: ApiDadataInnSuggestion) => {
    const { emails = [], phones = [], managers = [], management, inn, address } = data;

    const email = emails?.length ? emails[0].value : "";
    const phone = phones?.length ? phones[0].value : "";
    const chiefAccountant = managers?.length ? managers[0].fio : null;

    const commonFields = {
      email,
      phone,
      legalAddress: address?.value || "",
      inn,
    };

    if (isLegal) {
      form.reset({
        ...form.getValues(),
        ...commonFields,
        name: data.name.full_with_opf,
        shortName: data.name.short_with_opf,
        director: management?.name || "",
        kpp: data?.kpp || "",
        chiefAccountant: chiefAccountant ? `${chiefAccountant.surname} ${chiefAccountant.name}` : "",
      });
    } else {
      form.reset({
        ...form.getValues(),
        ...commonFields,
        name: value,
        shortName: value,
        ogrnip: data?.ogrn,
      });
    }
  };

  return (
    <>
      <Wrapper isLoading={isLoading}>
        <Form>
          <Title>Создание контрагента</Title>
          <Tabs
            background={Colors.WHITE}
            scrollButtons={false}
            currentValue={type}
            onChange={(_, value) => changeType(value)}
            items={tabList}
          />
          <FieldsWrapper>
            <InnSuggest
              inn={form.getValues("inn")}
              type={type}
              onChange={setInnData}
              inputProps={{
                placeholder: "ИНН",
                label: "ИНН",
                error: errors.includes("inn"),
                ...form.register("inn", FIELDS.checkNumberDigits("ИНН", isLegal ? 10 : 12)),
                onChange: (e) => form.setValue("inn", parseToNumber(e)),
              }}
            />
            <TextField placeholder="Название организации" label="Полное название" {...form.register("name")} />
            <TextField
              placeholder="Сокращеное название организации"
              label="Сокращенное наименование"
              {...form.register("shortName")}
            />
            <TextField placeholder="Юридический адрес" label="Юридический адрес" {...form.register("legalAddress")} />
            <TextField placeholder="Фактический адрес" label="Фактический адрес" {...form.register("actualAddress")} />
            <TextField
              placeholder="Почтовый адрес"
              label="Почтовый адрес"
              error={errors.includes("mailingAddress")}
              {...form.register("mailingAddress", FIELDS.email.validation)}
            />
            {isLegal ? (
              <>
                <TextField
                  placeholder="КПП"
                  label="КПП"
                  error={errors.includes("kpp")}
                  {...form.register("kpp", FIELDS.checkNumberDigits("КПП", 9))}
                  onChange={(e) => form.setValue("kpp", parseToNumber(e))}
                />
                <TextField
                  placeholder="ОГРН"
                  label="ОГРН"
                  error={errors.includes("psrn")}
                  {...form.register("psrn", FIELDS.checkNumberDigits("ОГРН", 13))}
                  onChange={(e) => form.setValue("psrn", parseToNumber(e))}
                />
              </>
            ) : (
              <TextField
                placeholder="ОГРНИП"
                label="ОГРНИП"
                error={errors.includes("ogrnip")}
                {...form.register("ogrnip", FIELDS.checkNumberDigits("ОГРНИП", 15))}
                onChange={(e) => form.setValue("ogrnip", parseToNumber(e))}
              />
            )}
            {formBanks.fields.map((item, idx) => (
              <BoxFieldsEntity
                title="Банковский счет"
                key={item.id}
                icon={
                  idx === 0 ? (
                    <PlusBorderlessIcon onClick={() => formBanks.append(defaultFormBank)} cursor="pointer" />
                  ) : (
                    <DeleteIcon color={Colors.ERROR} onClick={() => setModalDeleteBank(idx)} cursor="pointer" />
                  )
                }>
                <TextField
                  placeholder="Наименование банка"
                  label="Наименование банка"
                  {...form.register(`accounts.${idx}.bank`)}
                />
                <TextField
                  placeholder="Корреспондентский счет"
                  label="Корреспондентский счет"
                  error={checkBankField("corrAccount", idx)}
                  {...form.register(`accounts.${idx}.corrAccount`, FIELDS.checkNumberDigits("Корреспондентский счет", 20))}
                  onChange={(e) => form.setValue(`accounts.${idx}.corrAccount`, parseToNumber(e))}
                />
                <TextField
                  placeholder="Расчетный счет"
                  label="Расчетный счет"
                  error={checkBankField("checkingAccount", idx)}
                  {...form.register(`accounts.${idx}.checkingAccount`, FIELDS.checkNumberDigits("Расчетный счет", 20))}
                  onChange={(e) => form.setValue(`accounts.${idx}.checkingAccount`, parseToNumber(e))}
                />
                <BikBankSuggest
                  bik={form.getValues(`accounts.${idx}.bik`)}
                  onChange={(suggest) => {
                    form.setValue(`accounts.${idx}.bik`, suggest.data.bic);
                    form.setValue(`accounts.${idx}.bank`, suggest.value);
                    form.setValue(`accounts.${idx}.corrAccount`, suggest.data.correspondent_account);
                  }}
                  inputProps={{
                    placeholder: "БИК",
                    label: "БИК банка",
                    error: checkBankField("bik", idx),
                    ...form.register(`accounts.${idx}.bik`, FIELDS.checkNumberDigits("БИК банка", 9)),
                    onChange: (e) => form.setValue(`accounts.${idx}.bik`, parseToNumber(e)),
                  }}
                />
              </BoxFieldsEntity>
            ))}
            <InputList>
              {isLegal && (
                <>
                  <TextField placeholder="Имя директора" label="Директор" {...form.register("director")} />
                  <TextField
                    placeholder="Имя главного бухгалтера"
                    label="Главный бухгалтер"
                    {...form.register("chiefAccountant")}
                  />
                </>
              )}
              <PhoneField form={form} field={{ ...FIELDS.phone, name: "phone" }} />
              <EmailField form={form} />
              <SelectMui
                {...form.register("documentFlow")}
                placeholder="Документ"
                label="Документоооборот"
                options={documentFlowOptions}
              />
              <SelectMui
                {...form.register("taxSystem")}
                placeholder="Система"
                label="Система налогообложения"
                options={parseForSelect(taxSystem || [])}
                disabled={isTaxSystemLoading}
              />
            </InputList>
          </FieldsWrapper>
        </Form>
        <SendButton loading={isLoading} variant="contained" disabled={disabled} onClick={handleSubmit}>
          Создать
        </SendButton>
        {/* modals */}
        <CustomDialog
          open={isSentForm}
          onClose={() => setIsSentForm(false)}
          type={ModalDialogTypes.SUCCESS}
          actions={
            <Button
              variant="contained"
              onClick={() => {
                setIsSentForm(false);
                navigate(Routes.ACCOUNT_COUNTERPARTIES_PAGE);
              }}>
              Закрыть
            </Button>
          }>
          Запрос на добавление контрагента отправлен
        </CustomDialog>
        <CustomDialog
          open={Boolean(modalDeleteBank)}
          onClose={() => setModalDeleteBank(null)}
          onConfirm={() => {
            formBanks.remove(modalDeleteBank as number);
            setModalDeleteBank(null);
          }}
          onNotConfirm={() => setModalDeleteBank(null)}
          type={ModalDialogTypes.QUESTION}>
          Вы действительно хотите удалить банковский счет?
        </CustomDialog>
      </Wrapper>
    </>
  );
};
