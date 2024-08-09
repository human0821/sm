import { Like } from "@/shared/ui/Like/Like";

import { LikesWrapper } from "./Likes.styled";
import { LikeType } from "../../consts/consts";
import { useCommentAction, useLikes } from "../../hooks";

export const Likes: React.FC<{ comment: UserComment.CommentEntity }> = ({ comment }) => {
  const { onLikeChange } = useCommentAction();

  const onChange = (like: boolean) => {
    onLikeChange(comment.id, like);
  };

  const { state: likesState, onLike, onDislike } = useLikes(comment, onChange);

  return (
    <LikesWrapper>
      <Like type="LIKE" isActive={likesState.like === LikeType.LIKE} onClick={onLike} count={likesState.quantity.like} />
      <Like
        type="DISLIKE"
        isActive={likesState.like === LikeType.DISLIKE}
        onClick={onDislike}
        count={likesState.quantity.dislike}
      />
    </LikesWrapper>
  );
};
