import type { CaseSegmentPrivilegesViewSchema } from "@/app/api/apiGenerator/common/casesApi";

import { TextField, Typography, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { mediaQueryHelp } from "@/app/styles/functions";
import { CloseIcon } from "@/assets/icons";
import { BlockCardEntity } from "@/entities/block";
import { ModalDialogTypes } from "@/entities/modal";
import { FIELDS } from "@/shared/consts/fields";
import { motionFade } from "@/shared/consts/motion";
import { ButtonLoading } from "@/shared/ui/Button";
import CustomDialog from "@/shared/ui/DialogBox/DialogBox";
import { fieldRegister } from "@/shared/utils/fieldRegister";
import { generateUniqueId } from "@/shared/utils/stringHelpers";

import {
  CaseForm,
  CaseFormContent,
  FieldsWrapper,
  FieldWrapper,
  IconButton,
  PrivilegesEmpty,
} from "./CaseManagmentForm.styled";
import { useCaseManagmentForm } from "../hooks/useCaseManagmentForm";

export const CaseManagmentForm = ({ data }: { data: CaseSegmentPrivilegesViewSchema }) => {
  const { form, isLoading, submit, showSuccess, hideSuccess } = useCaseManagmentForm({
    id: data.id,
  });
  const [privileges, setPrivileges] = useState<[string, string][]>([]);

  useEffect(() => {
    if (data.privileges && data.privileges["1"]) {
      setPrivileges(Object.entries(data.privileges));
    } else {
      setPrivileges([[generateUniqueId(), ""]]);
    }
  }, [data]);

  const addField = () => {
    const uniqueID = generateUniqueId();
    const newPrivilegy: [string, string] = privileges.length > 0 ? [uniqueID, ""] : [uniqueID, ""];

    setPrivileges([...privileges, newPrivilegy]);
  };

  const removeField = (id: string) => {
    const filtered = privileges.filter((item) => item[0] !== id);
    form.unregister(id);
    setPrivileges(filtered);
  };

  return (
    <>
      <CaseForm onSubmit={form.handleSubmit(submit)}>
        <BlockCardEntity>
          <CaseFormContent>
            <Typography variant="h1">{`Редактирование кейса «${data.name}»`}</Typography>
            <FieldsWrapper>
              {privileges.length > 0 ? (
                privileges.map(([key, value]) => (
                  <motion.div {...motionFade} key={key}>
                    <FieldWrapper>
                      <TextField
                        {...fieldRegister(form, { ...FIELDS.privilegy, name: key }, { required: " " })}
                        defaultValue={value}
                        sx={{ width: "100%" }}
                      />
                      <IconButton onClick={() => removeField(key)} fullColor>
                        <CloseIcon />
                      </IconButton>
                    </FieldWrapper>
                  </motion.div>
                ))
              ) : (
                <motion.div {...motionFade} key="empty">
                  <PrivilegesEmpty>Привилегий нет</PrivilegesEmpty>
                </motion.div>
              )}
            </FieldsWrapper>
            <Button
              variant="outlined"
              sx={mediaQueryHelp({ width: { xs: "100%", l: "50%" }, marginLeft: { l: "auto" } })}
              onClick={addField}>
              Добавить пункт
            </Button>
          </CaseFormContent>
        </BlockCardEntity>
        <ButtonLoading
          loading={isLoading}
          type="submit"
          variant="contained"
          sx={mediaQueryHelp({ width: { xs: "100%", l: "50%" }, marginLeft: { l: "auto" } })}>
          Сохранить изменения
        </ButtonLoading>
      </CaseForm>
      <CustomDialog
        type={ModalDialogTypes.SUCCESS}
        open={showSuccess}
        actions={
          <Button onClick={hideSuccess} sx={{ flexGrow: 1 }} variant="contained">
            Закрыть
          </Button>
        }>
        Данные успешно сохранены
      </CustomDialog>
    </>
  );
};
