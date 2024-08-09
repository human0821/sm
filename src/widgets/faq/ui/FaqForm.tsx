import type { EmployeeSmPartnerSchema } from "@/app/api/apiGenerator/common/employeesApi";

import { TextField, Typography } from "@mui/material";
import { useEffect } from "react";

import { mediaQueryHelp } from "@/app/styles/functions";
import { BlockCardEntity } from "@/entities/block";
import { FIELDS } from "@/shared/consts/fields";
import { ButtonLoading } from "@/shared/ui/Button/Loading/ButtonLoading";
import { fieldRegister } from "@/shared/utils/fieldRegister";

import { InfoForm, InfoFormContent, FieldsWrapper } from "./FaqForm.styled";
import { useFaqForm } from "../hooks/useFaqForm";

export const FaqForm = ({ data }: { data?: EmployeeSmPartnerSchema }) => {
  const { form, isLoading, submit } = useFaqForm({
    id: data?.id,
  });

  useEffect(() => {
    if (data) {
      form.setValue("fullName", data.fullName || "");
    }
  }, [data]);

  return (
    <InfoForm onSubmit={form.handleSubmit(submit)}>
      <BlockCardEntity>
        <InfoFormContent>
          <Typography variant="h1">{data ? "Редактирование вопроса" : "Добавить вопрос"}</Typography>
          <FieldsWrapper>
            <TextField {...fieldRegister(form, FIELDS.question, { required: " " })} />
            <TextField {...fieldRegister(form, FIELDS.answer, { required: " " })} multiline minRows={1} maxRows={5} />
          </FieldsWrapper>
        </InfoFormContent>
      </BlockCardEntity>
      <ButtonLoading
        loading={isLoading}
        type="submit"
        variant="contained"
        sx={mediaQueryHelp({ width: { xs: "100%", l: "50%" }, marginLeft: { l: "auto" } })}>
        Сохранить
      </ButtonLoading>
    </InfoForm>
  );
};
