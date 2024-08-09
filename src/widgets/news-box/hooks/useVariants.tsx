import { AnimatePresence, motion } from "framer-motion";
import { useMemo } from "react";

import { CloseIcon } from "@/assets/icons";
import { motionFadeCollapse } from "@/shared/consts/motion";

import { OTHER_ANSWER } from "../consts";
import { DiscardAnswer, DiscardText, Variant, Percent, Answer } from "../ui/Survey/Survey.styled";

export const useVariants = (
  answers: NewsBox.AnswerEntity[],
  freeAnswerFlag: boolean,
  hideResultsFlag: boolean,
  onVote: React.MouseEventHandler<HTMLDivElement>,
  onUnvote: (answerId?: string | undefined) => void,
) => {
  return useMemo(() => {
    const isAnswered = answers.some((answer) => answer.answered);
    const isFreeAnswerAnswered = answers.some((answer) => answer.answered && answer.freeAnswer);
    const answersPrepared = [...answers];

    if (freeAnswerFlag) {
      const allPercents = answers.reduce((previous, current) => previous + (current.result || 0), 0);

      if (isFreeAnswerAnswered) {
        const freeAnswer = answers.find((answer) => answer.answered && answer.freeAnswer);
        if (freeAnswer) {
          const freeAnswerIndex = answers.findIndex((answer) => answer.answered && answer.freeAnswer);
          const freeAnswerPrepared = { ...freeAnswer };
          freeAnswerPrepared.result = 100 - allPercents;
          answersPrepared.push(freeAnswerPrepared);
          answersPrepared.splice(freeAnswerIndex, 1);
        }
      } else if (isAnswered) {
        const otherAnswer = { answer: OTHER_ANSWER, answered: false, result: 100 - allPercents, id: -1, freeAnswer: false };
        answersPrepared.push(otherAnswer);
      }
    }

    const variants = answersPrepared.map(({ id: answerId, answer, answered, result: percent }) => {
      const id = String(answerId);
      const isOtherAnswer = answerId === -1;
      return (
        <div key={id}>
          <Variant id={id} isAnswered={answered} onClick={(event) => !isOtherAnswer && onVote(event)}>
            <Answer>{answer}</Answer>
            <Percent>
              {isAnswered && typeof percent === "number" ? `${percent}%` : isAnswered && hideResultsFlag ? "-" : ""}
            </Percent>
          </Variant>
          <AnimatePresence>
            {answered && (
              <motion.div key={id} {...motionFadeCollapse}>
                <DiscardAnswer onClick={() => !isOtherAnswer && onUnvote(String(answerId))}>
                  <CloseIcon />
                  <DiscardText>Отменить свой голос</DiscardText>
                </DiscardAnswer>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    });

    return { isAnswered, isFreeAnswerAnswered, variants };
  }, [answers]);
};
