import { Reply } from "@/shared/ui/Reply/Reply";

import { REPLY_TEXT } from "../../consts/consts";
import { useReply } from "../../hooks";

export const ReplyText: React.FC<{
  comment: UserComment.CommentEntity;
  isReplyMode: boolean;
}> = ({ comment, isReplyMode }) => {
  const { onReplyClick } = useReply();
  const replyClick = () => {
    onReplyClick(comment, isReplyMode);
  };

  return <Reply onClick={replyClick} text={REPLY_TEXT} />;
};
