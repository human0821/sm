import { useCommentAction } from "./useCommentAction";

export const useDelete = (confirmRef: React.MutableRefObject<Confirm.Ref | null>, comment: UserComment.CommentEntity) => {
  const { onRemoveComment } = useCommentAction();
  const onDelete = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    confirmRef.current!.position(event.currentTarget);
    confirmRef.current!.handlers(
      () => onRemoveComment(comment.id),
      () => {
        /*@code*/
      },
    );
  };
  return { onDelete };
};
