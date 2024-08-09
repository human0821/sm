import { useMediaQuery } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";

import { useAppSelector } from "@/app/store";
import { Breakpoints } from "@/app/styles/breakpoints";
import { UserCommentEntity } from "@/entities/news/ui/UserComment/UserCommentEntity";
import { motionFadeCollapse } from "@/shared/consts/motion";

import { Actions, Editing, ReplyLikesWrapper } from "./UserComment.styled";
import { DeleteComment, Edit, EditComment, Likes, ReplyComment, ReplyText } from "../../";

export const UserComment: React.FC<{
  comment: UserComment.CommentEntity;
  children?: React.ReactNode;
  confirmRef: React.MutableRefObject<Confirm.Ref | null>;
  setShowLastComments: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ comment, children, confirmRef, setShowLastComments }) => {
  const isTablet = useMediaQuery(`(min-width:${Breakpoints.TABLET_L})`);
  const propValue = (prop: string, obj: Record<string, any>) => (prop in obj ? obj[prop] : undefined);
  const checkOnlyAffectedIds = (a: number | null, b: number | null) =>
    b !== comment.id && !(a === comment.id && b !== comment.id);

  const activeEditingId = useAppSelector(
    (state) => state.comment.activeEditingId,
    (old, upd) => checkOnlyAffectedIds(old, upd),
  );
  const activeReplyId = useAppSelector(
    (state) => state.comment.activeReplyId,
    (old, upd) => checkOnlyAffectedIds(old, upd),
  );

  const isEditingMode = activeEditingId === comment.id;
  const isReplyMode = activeReplyId === comment.id;

  const childComments = (
    <>
      <AnimatePresence>
        {isReplyMode && (
          <motion.div {...motionFadeCollapse}>
            <ReplyComment comment={comment} setShowLastComments={setShowLastComments} />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>{children}</AnimatePresence>
    </>
  );
  return (
    <motion.div key={comment.id} {...motionFadeCollapse}>
      <UserCommentEntity comment={comment} hideText={isEditingMode}>
        <AnimatePresence>{isEditingMode && <EditComment comment={comment} />}</AnimatePresence>
        <Actions editing={isEditingMode}>
          <ReplyLikesWrapper>
            <ReplyText comment={comment} isReplyMode={isReplyMode} />
            <Likes comment={comment} />
          </ReplyLikesWrapper>
          <Editing>
            {(comment.canEdit || propValue("can_edit", comment)) && <Edit comment={comment} />}
            {(comment.canDelete || propValue("can_delete", comment)) && (
              <DeleteComment comment={comment} confirmRef={confirmRef} />
            )}
          </Editing>
        </Actions>
        {isTablet && childComments}
      </UserCommentEntity>
      {!isTablet && childComments}
    </motion.div>
  );
};
