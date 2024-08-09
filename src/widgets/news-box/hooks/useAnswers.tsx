import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import { ANONYM_USER } from "@/entities/news/consts/consts";
import { UserCommentEntity } from "@/entities/news/ui/UserComment/UserCommentEntity";
import { motionFadeCollapse } from "@/shared/consts/motion";

export const useAnswers = (freeAnswers: NewsBox.FreeAnswersResponseEntity | undefined) => {
  const minLength = 4;
  const itemsLength = freeAnswers?.items?.length || 0;

  const [hide, setHide] = useState(false);

  const answers = useMemo(
    () =>
      ((freeAnswers && [...freeAnswers.items]) || [])
        /*.sort((a, b) => b.id - a.id)*/
        .map(({ id, user, answer, created }) => {
          const comment = {
            id,
            text: answer,
            created,
            author: { avatar: user?.avatar as string | null, shortenedName: user?.fullName || ANONYM_USER },
            anonymousFlag: false,
          };
          return (
            <motion.div key={id} {...motionFadeCollapse}>
              <UserCommentEntity hideText={false} comment={comment} />
            </motion.div>
          );
        }),
    [freeAnswers],
  );

  useEffect(() => {
    if (freeAnswers) {
      setHide(itemsLength > minLength);
    }
  }, [freeAnswers]);

  return {
    length: itemsLength,
    answers: hide ? [...answers].slice(0, minLength) : answers,
    showHideBlock: itemsLength > minLength,
    showLast: hide,
    remaining: hide ? itemsLength - minLength : 0,
    onHide: () => setHide(!hide),
  };
};
