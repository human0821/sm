import { useForm } from "react-hook-form";

import { defaultForm } from "../consts/form";

const requiredFields: MessageFormRequiredFields = ["message", "recipientCategory", "recipientMessage"];

export const useMessageForm = ({ messageLimit }: { messageLimit: number }) => {
  const form = useForm<MessageForm>({
    defaultValues: defaultForm,
  });

  form.watch();

  const values: MessageForm = { ...form.getValues(), message: form.getValues("message").trim() };
  const messageLength = form.getValues("message").length;
  const maxСharacters = messageLength >= messageLimit;
  const validRequired = requiredFields.filter(
    (key) => (Array.isArray(values[key]) && values[key].length === 0) || !values[key],
  );

  return {
    maxСharacters,
    validRequired,
    messageLength,
    form,
  };
};
