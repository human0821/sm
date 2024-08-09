import { SWITCH_TEXT, TEXTAREA_PLACEHOLDER1 } from "@/features/news/consts/consts";
import { useCommentAction } from "@/features/news/hooks/useCommentAction";
import { TextareaContainer } from "@/shared/ui/TextareaContainer/TextareaContainer";

export const CommentBoxInput: React.FC = () => {
  const { onAddComment } = useCommentAction();
  return (
    <TextareaContainer
      value=""
      disabled={false}
      height={160}
      switchText={SWITCH_TEXT}
      placeholder={TEXTAREA_PLACEHOLDER1}
      onSend={onAddComment}
    />
  );
};
