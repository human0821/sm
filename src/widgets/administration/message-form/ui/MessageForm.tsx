import type { FC } from "react";

import { Button, TextField } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";

import { CloseIcon } from "@/assets/icons";
import { ModalDialogTypes } from "@/entities/modal";
import { rolesSelectOptions } from "@/shared/consts/roles";
import { DatePicker } from "@/shared/ui/DatePicker/DatePicker";
import CustomDialog from "@/shared/ui/DialogBox/DialogBox";
import { SelectMui } from "@/shared/ui/Select/MuiSelect";
import { SwitchWithLabel } from "@/shared/ui/SwitchWithLabel";

import {
  DiscardDate,
  MessagesBtn,
  MessagesContainer,
  MessagesFields,
  MessagesForm,
  MessagesTitle,
  MessagesToggle,
  SelectDateWrapper,
} from "./MessageForm.styled";
import { defaultForm } from "../consts/form";
import { recipientMessageUsersOptions } from "../consts/mock";
import { useMessageForm } from "../hooks/useMessageForm";

export const MessageForm: FC<MessageFormProps> = ({ messageLimit }) => {
  const [isSentMessage, setIsSentMessage] = useState(false);
  const [modalDeleteDate, setModalDeleteDate] = useState(false);
  const { maxСharacters, form, messageLength, validRequired } = useMessageForm({
    messageLimit,
  });

  const sendMessage = () => {
    setIsSentMessage(true);
    form.reset(defaultForm);
    // Пункт ТЗ:
    // Кнопка отправить сообщение. При клике открывается popup с уведомлением об отправке и закрывается через 5 секунд.
    setTimeout(() => setIsSentMessage(false), 5000);
  };

  const deleteDate = () => {
    form.setValue("date", null);
    setModalDeleteDate(false);
  };

  return (
    <MessagesContainer>
      <MessagesForm>
        <MessagesTitle>Отправка сообщения</MessagesTitle>
        <MessagesFields>
          <SelectMui
            label="Категория получателей"
            placeholder="Выберите из списка"
            options={rolesSelectOptions}
            multiple={true}
            multipleAll={true}
            {...form.register("recipientCategory")}
            value={form.getValues("recipientCategory")}
          />
          <SelectMui
            label="Получатель сообщения"
            placeholder="Выберите из списка"
            options={recipientMessageUsersOptions.map((item) => ({ ...item, value: `${item.value}` }))}
            multiple={true}
            multipleAll={true}
            {...form.register("recipientMessage")}
            value={form.getValues("recipientMessage")}
          />
          <TextField
            multiline={true}
            placeholder="Введите сообщение"
            label="Текст сообщения"
            value={form.getValues("message")}
            helperText={maxСharacters ? `${messageLength} символа` : `до ${messageLimit} символов`}
            error={maxСharacters}
            {...form.register("message", { required: true, maxLength: messageLimit })}
          />
          <SelectDateWrapper>
            <DatePicker
              value={form.getValues("date") ? dayjs(form.getValues("date")) : null}
              label="Отложенная отправка сообщения"
              placeholder="ДД.ММ.ГГГГ ЧЧ:ММ"
              onChange={(value) => form.setValue("date", dayjs(value).format("DD.MM.YYYY HH:mm"))}
              withTime
            />
            {Boolean(form.getValues("date")) && (
              <DiscardDate onClick={() => setModalDeleteDate(true)}>
                Отменить <CloseIcon />
              </DiscardDate>
            )}
          </SelectDateWrapper>
        </MessagesFields>
        <MessagesToggle>
          <SwitchWithLabel label="Обязательно к прочтению" onChange={(status) => form.setValue("requiredRead", status)} />
        </MessagesToggle>
      </MessagesForm>
      <MessagesBtn variant="contained" disabled={Boolean(validRequired.length)} onClick={form.handleSubmit(sendMessage)}>
        Отправить сообщение
      </MessagesBtn>

      {/* modals */}
      <CustomDialog
        type={ModalDialogTypes.SUCCESS}
        open={isSentMessage}
        onClose={() => setIsSentMessage(false)}
        actions={
          <Button variant="contained" onClick={() => setIsSentMessage(false)}>
            Закрыть
          </Button>
        }>
        Сообщение отправлено!
      </CustomDialog>
      <CustomDialog
        onConfirm={deleteDate}
        onNotConfirm={() => setModalDeleteDate(false)}
        type={ModalDialogTypes.DELETE}
        open={modalDeleteDate}
        onClose={() => setModalDeleteDate(false)}>
        Вы действительно хотите отменить отложенную отправку?
      </CustomDialog>
    </MessagesContainer>
  );
};
