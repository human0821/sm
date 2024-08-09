import { useActions } from "@/shared/hooks/useActions";

export const useReply = () => {
  const { setActiveReplyId } = useActions();
  const replyHide = () => {
    setActiveReplyId(null);
  };

  const onReplyClick = (comment: UserComment.CommentEntity, isReplyMode: boolean) => {
    if (isReplyMode) {
      setActiveReplyId(null);
    } else {
      setActiveReplyId(comment.id);
    }
  };

  return { replyHide, onReplyClick };
};
