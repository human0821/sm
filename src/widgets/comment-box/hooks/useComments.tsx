import { useEffect, useMemo, useRef, useState } from "react";
import { useParams } from "react-router-dom";

import { useGetNewsCommentsQuery } from "@/app/api/news/api";
import { LAST_COMMENTS_COUNT } from "@/features/news/consts/consts";
import { UserComment } from "@/features/news/ui/UserComment/UserComment";
import { useActions } from "@/shared/hooks/useActions";

export const useComments = (confirmRef: React.MutableRefObject<Confirm.Ref | null>) => {
  let commentsLength = 0;
  const { setCommentsCount } = useActions();
  const commentsLengthRef = useRef<number>(0);
  const [initialized, setInitialized] = useState(false);
  const [showLastComments, setShowLastComments] = useState(false);
  const urlParams = useParams();
  const { id } = urlParams;
  const newsId = id!;
  const { data, isError } = useGetNewsCommentsQuery({ id: newsId });
  const loadedCommentsLength = data?.length || 0;

  const createUserComment = (comment: UserComment.CommentEntity, childComments: React.JSX.Element[] | null) => {
    return (
      <UserComment key={comment.id} confirmRef={confirmRef} comment={comment} setShowLastComments={setShowLastComments}>
        {childComments}
      </UserComment>
    );
  };

  const createUserComments = (parent: UserComment.CommentEntity, children: UserComment.CommentEntity[]) => {
    let childComments: UserComment.CommentEntity[] = [];
    const addChildComments = (comments: UserComment.CommentEntity[]) => {
      commentsLength += comments.length;
      const sorted = [...comments].sort((a, b) => b.id - a.id);
      for (let c = 0; c < sorted.length; c++) {
        const comment = sorted[c];
        const { children } = comment;
        childComments = [...childComments, comment];
        if (children) {
          addChildComments(children);
        }
      }
    };
    addChildComments(children);

    return createUserComment(
      parent,
      childComments.map((comment) => ({ ...comment, children: null })).map((comment) => createUserComment(comment, null)),
    );
  };

  const createUserCommentTree = (comments: UserComment.CommentEntity[]): React.JSX.Element[] => {
    commentsLength += comments.length;
    let result: React.JSX.Element[] = [];
    const sorted = [...comments].sort((a, b) => b.id - a.id);
    for (let c = 0; c < sorted.length; c++) {
      const comment = sorted[c];
      const { children } = comment;
      if (children) {
        result = [...result, createUserComments(comment, children)];
        //result = [...result, createUserComment(comment, createUserCommentTree(children))];
      } else {
        result = [...result, createUserComment(comment, null)];
      }
    }
    return result;
  };

  const comments = useMemo(() => {
    if (data) {
      const commentsTree = createUserCommentTree(data);
      const lastComments = [...data]
        .sort((a, b) => a.id - b.id)
        .slice(-LAST_COMMENTS_COUNT)
        .sort((a, b) => b.id - a.id)
        .map((comment) => createUserComment(comment, []));
      if (commentsLength > LAST_COMMENTS_COUNT) {
        if (!initialized) {
          setInitialized(true);
          setShowLastComments(true);
        }
      } else {
        setShowLastComments(false);
      }
      commentsLengthRef.current = commentsLength;
      return [commentsTree, lastComments];
    } else {
      return [[], []];
    }
  }, [data]);

  useEffect(() => {
    setCommentsCount({ newsId: Number(newsId), value: commentsLengthRef.current });
  }, [commentsLengthRef.current]);

  const onHideComments = () => {
    if (confirmRef.current) {
      confirmRef.current.hide();
    }
    setShowLastComments((value) => !value);
  };

  return {
    comments: showLastComments ? comments[1] : comments[0],
    commentsLength: commentsLengthRef.current,
    remainingComments:
      commentsLengthRef.current - (loadedCommentsLength > LAST_COMMENTS_COUNT ? LAST_COMMENTS_COUNT : loadedCommentsLength),
    showHideBlock: commentsLengthRef.current > LAST_COMMENTS_COUNT,
    showLastComments,
    onHideComments,
    isError,
  };
};
