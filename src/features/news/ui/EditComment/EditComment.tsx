import { motion } from "framer-motion";

import { motionFadeCollapse } from "@/shared/consts/motion";
import { TextareaContainer } from "@/shared/ui/TextareaContainer/TextareaContainer";

import { TEXTAREA_PLACEHOLDER1 } from "../../consts/consts";
import { useCommentAction, useEdit } from "../../hooks";

export const EditComment: React.FC<{ comment: UserComment.CommentEntity }> = ({ comment }) => {
  const { hideEdit } = useEdit();
  const { onEditComment } = useCommentAction();
  const onEditingSave = (text: string) => {
    onEditComment(comment.id, text);
    hideEdit();
  };
  return (
    <motion.div {...motionFadeCollapse}>
      <TextareaContainer
        value={comment.text}
        disabled={false}
        switchText=""
        height={140}
        placeholder={TEXTAREA_PLACEHOLDER1}
        onEditingSave={onEditingSave}
        onEditingCancel={hideEdit}
      />
    </motion.div>
  );
};
