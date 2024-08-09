interface MessageForm {
  recipientCategory: (string | nubmer)[];
  recipientMessage: (string | nubmer)[];
  message: string;
  requiredRead: boolean;
  date?: string | null;
}

interface MessageFormProps {
  messageLimit: number;
}

type MessageFormRequiredFields = (keyof Omit<MessageForm, "date" | "required_read">)[];
