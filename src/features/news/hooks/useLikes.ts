import { useState } from "react";

import { LikeType } from "../consts/consts";

export const useLikes = (comment: UserComment.CommentEntity, onLikeChange: (like: boolean) => void) => {
  const { likes, dislikes, like } = comment;
  const [state, setState] = useState<UserComment.LikesState>({ quantity: { like: likes, dislike: dislikes }, like });

  const update = (likes: number, dislikes: number, like: (typeof state)["like"]) => {
    setState((state) => ({
      quantity: { like: state.quantity.like + likes, dislike: state.quantity.dislike + dislikes },
      like,
    }));
  };

  const likeAction = (type: LikeType) => {
    const { LIKE, DISLIKE } = LikeType;
    const isLikeType = type === LIKE;
    onLikeChange(isLikeType);

    switch (state.like) {
      case null:
        isLikeType ? update(1, 0, LIKE) : update(0, 1, DISLIKE);
        break;
      case LIKE:
        isLikeType ? update(-1, 0, null) : update(-1, 1, DISLIKE);
        break;
      case DISLIKE:
        isLikeType ? update(1, -1, LIKE) : update(0, -1, null);
        break;
    }
  };

  return {
    state,
    onLike: () => likeAction(LikeType.LIKE),
    onDislike: () => likeAction(LikeType.DISLIKE),
  };
};
