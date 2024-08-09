import { useSnackbar } from "notistack";
import { useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";

import {
  useAddCommentMutation,
  useDeleteCommentMutation,
  useEditCommentMutation,
  useLikeCommentMutation,
} from "@/app/api/news/api";
import { Variants } from "@/shared/consts/variants";

import { COMMENT_ADD_FAILED, COMMENT_DELETE_FAILED, COMMENT_EDITING_FAILED, LIKE_FAILED } from "../consts/consts";

export const useCommentAction = () => {
  const { enqueueSnackbar } = useSnackbar();
  const urlParams = useParams();
  const { id } = urlParams;
  const newsId = id!;

  const [addComment, addCommentState] = useAddCommentMutation();
  const [deleteComment, deleteCommentState] = useDeleteCommentMutation();
  const [likeComment, likeCommentState] = useLikeCommentMutation();
  const [editComment, editCommentState] = useEditCommentMutation();

  useEffect(() => {
    if (addCommentState.isError) {
      enqueueSnackbar(COMMENT_ADD_FAILED, {
        variant: Variants.ERROR,
      });
    }
  }, [addCommentState]);

  useEffect(() => {
    if (deleteCommentState.isError) {
      enqueueSnackbar(COMMENT_DELETE_FAILED, {
        variant: Variants.ERROR,
      });
    }
  }, [deleteCommentState]);

  useEffect(() => {
    if (likeCommentState.isError) {
      enqueueSnackbar(LIKE_FAILED, {
        variant: Variants.ERROR,
      });
    }
  }, [likeCommentState]);

  useEffect(() => {
    if (editCommentState.isError) {
      enqueueSnackbar(COMMENT_EDITING_FAILED, {
        variant: Variants.ERROR,
      });
    }
  }, [editCommentState]);

  const onEditComment = (commentId: number, text: string) =>
    editComment({
      nid: newsId,
      cid: String(commentId),
      text,
    });

  const onLikeChange = (commentId: number, like: boolean) => likeComment({ nid: newsId, cid: String(commentId), like });

  const onRemoveComment = (commentId: number) => {
    deleteComment({
      nid: newsId,
      cid: String(commentId),
    });
  };

  const onAddComment = useCallback((state: TextareaContainer.ContainerState) => {
    addComment({
      id: newsId,
      text: state.value,
      anonymous_flag: state.anonymous,
      parent_id: null,
    });
  }, []);

  const onReplyComment = (commentId: number, state: TextareaContainer.ContainerState) => {
    return addComment({
      id: newsId,
      text: state.value,
      anonymous_flag: state.anonymous,
      parent_id: commentId,
    });
  };

  return {
    onEditComment,
    onLikeChange,
    onRemoveComment,
    onAddComment,
    onReplyComment,
  };
};
