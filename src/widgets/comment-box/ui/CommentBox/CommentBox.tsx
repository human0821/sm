import { AnimatePresence, motion } from "framer-motion";
import { useRef, memo } from "react";

import { ConfirmEntity } from "@/entities/confirm";
import { COMMENTS_LOADING_FAILED, COMMENTS_TEXT, HIDE_TEXT, SHOW_TEXT } from "@/features/news/consts/consts";
import { motionFade } from "@/shared/consts/motion";

import { Wrapper, CommentsLenth, Comments, Hide } from "./CommentBox.styled";
import { useComments } from "../../hooks/useComments";
import { CommentBoxInput } from "../CommentBoxInput/CommentBoxInput";

const CommentBox: React.FC<{ newsId: string | undefined }> = memo(() => {
  const confirmRef = useRef<Confirm.Ref | null>(null);
  const { comments, commentsLength, remainingComments, showHideBlock, showLastComments, onHideComments, isError } =
    useComments(confirmRef);

  return (
    <AnimatePresence>
      {!isError && comments ? (
        <motion.div {...motionFade}>
          <Wrapper>
            <CommentsLenth>
              <span>{COMMENTS_TEXT} </span>
              <span>{commentsLength}</span>
            </CommentsLenth>
            <CommentBoxInput />
            <Comments>
              <AnimatePresence>{comments}</AnimatePresence>
              {showHideBlock && (
                <Hide onClick={onHideComments}>{showLastComments ? `${SHOW_TEXT} (${remainingComments})` : HIDE_TEXT}</Hide>
              )}
            </Comments>
            <ConfirmEntity ref={confirmRef} />
          </Wrapper>
        </motion.div>
      ) : (
        isError && <motion.div {...motionFade}>{COMMENTS_LOADING_FAILED}</motion.div>
      )}
    </AnimatePresence>
  );
});

CommentBox.displayName = "CommentBox";
export { CommentBox };
