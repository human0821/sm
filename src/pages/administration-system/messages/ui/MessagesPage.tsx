import { MessageForm } from "@/widgets/administration/message-form";

import { messageLimit } from "../consts/messageLimit";

export const MessagesPage = () => <MessageForm messageLimit={messageLimit} />;
