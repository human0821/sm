import { TextareaContainer } from "@/shared/ui/TextareaContainer/TextareaContainer";

import { SWITCH_TEXT, TEXTAREA_PLACEHOLDER2 } from "../../consts/consts";
import { useCommentAction, useReply } from "../../hooks";

export const ReplyComment: React.FC<{
  comment: UserComment.CommentEntity;
  setShowLastComments: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ comment, setShowLastComments }) => {
  const { onReplyComment } = useCommentAction();
  const { replyHide } = useReply();
  const onReply = (state: TextareaContainer.ContainerState) => {
    replyHide();
    (async () => {
      await onReplyComment(comment.id, state).unwrap();
      setShowLastComments(() => false);
    })();
  };
  return (
    <TextareaContainer
      focus={true}
      value=""
      disabled={false}
      switchText={SWITCH_TEXT}
      height={45}
      placeholder={TEXTAREA_PLACEHOLDER2}
      onSend={onReply}
    />
  );
};
