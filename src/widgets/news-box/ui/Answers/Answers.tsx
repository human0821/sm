import { AnimatePresence, motion } from "framer-motion";

import { HIDE_TEXT, SHOW_TEXT } from "@/features/news/consts/consts";
import { motionFadeCollapse } from "@/shared/consts/motion";
import { TextareaContainer } from "@/shared/ui/TextareaContainer/TextareaContainer";

import { FREE_ANSWER_TEXT, PERSONAL_ANSWER, SWITCH_TEXT2, TEXTAREA_PLACEHOLDER3 } from "../../consts";
import { useAnswers } from "../../hooks/useAnswers";
import { useVariants } from "../../hooks/useVariants";
import { FreeAnswer, Variants, Wrapper, FreeAnswersWrapper, FreeAnswersText, Hide } from "../Survey/Survey.styled";

export const Answers: React.FC<NewsBox.Answers> = ({
  answers,
  onVote,
  onUnvote,
  freeAnswerFlag,
  manyChoiceFlag,
  hideResultsFlag,
  freeAnswersData,
  onFreeAnswer,
}) => {
  const { answers: freeAnswers, showHideBlock, showLast, remaining, length, onHide } = useAnswers(freeAnswersData);
  const { variants, isAnswered, isFreeAnswerAnswered } = useVariants(
    answers,
    freeAnswerFlag,
    hideResultsFlag,
    onVote,
    onUnvote,
  );

  return (
    <Wrapper>
      <Variants>{variants}</Variants>
      <AnimatePresence>
        {freeAnswerFlag && ((!manyChoiceFlag && !isAnswered) || (manyChoiceFlag && !isFreeAnswerAnswered)) && (
          <motion.div {...motionFadeCollapse}>
            <FreeAnswer>{PERSONAL_ANSWER}</FreeAnswer>
            <TextareaContainer
              value=""
              disabled={false}
              switchText={SWITCH_TEXT2}
              height={45}
              placeholder={TEXTAREA_PLACEHOLDER3}
              onSend={onFreeAnswer}
            />
          </motion.div>
        )}
      </AnimatePresence>
      {freeAnswerFlag && isAnswered && length > 0 && (
        <FreeAnswersWrapper>
          <FreeAnswersText>
            {FREE_ANSWER_TEXT} <span>{length}</span>
          </FreeAnswersText>
          <AnimatePresence>{freeAnswers}</AnimatePresence>
          {showHideBlock && <Hide onClick={onHide}>{showLast ? `${SHOW_TEXT} (${remaining})` : HIDE_TEXT}</Hide>}
        </FreeAnswersWrapper>
      )}
    </Wrapper>
  );
};
