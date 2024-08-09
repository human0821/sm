import { useActions } from "@/shared/hooks/useActions";

export const useEdit = () => {
  const { setActiveReplyId, setActiveEditingId } = useActions();

  const onEditClick = (commentId: number) => {
    setActiveReplyId(null);
    setActiveEditingId(commentId);
  };

  const hideEdit = () => {
    setActiveEditingId(null);
  };

  return { onEditClick, hideEdit };
};
