import { EditIcon } from "@/assets/icons";

import { EditWrapper } from "./Edit.styled";
import { useEdit } from "../../hooks";

export const Edit: React.FC<{ comment: UserComment.CommentEntity }> = ({ comment }) => {
  const { onEditClick } = useEdit();
  return (
    <EditWrapper onClick={() => onEditClick(comment.id)}>
      <EditIcon />
    </EditWrapper>
  );
};
