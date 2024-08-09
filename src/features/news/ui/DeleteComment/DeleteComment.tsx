import { TrashIcon } from "@/assets/icons";

import { DeleteCommentWrapper } from "./DeleteComment.styled";
import { useDelete } from "../../hooks";

export const DeleteComment: React.FC<{
  confirmRef: React.MutableRefObject<Confirm.Ref | null>;
  comment: UserComment.CommentEntity;
}> = ({ comment, confirmRef }) => {
  const { onDelete } = useDelete(confirmRef, comment);

  return (
    <>
      <DeleteCommentWrapper onClick={onDelete} id={`trash-${comment.id}`}>
        <TrashIcon />
      </DeleteCommentWrapper>
    </>
  );
};
