import { AnimatePresence, motion } from "framer-motion";

import { useSurveyAction } from "@/features/news/hooks/useSurveyAction";
import { motionFade } from "@/shared/consts/motion";

import { SURVEY_RESULTS_ERROR } from "../../consts";
import { Answers } from "../Answers/Answers";

export const Survey: React.FC = () => {
  const { data, isError, freeAnswersData, onVote, onUnvote, onFreeAnswer } = useSurveyAction();

  return (
    <AnimatePresence>
      {!isError && data ? (
        <motion.div {...motionFade}>
          <Answers
            answers={data.answers || []}
            freeAnswerFlag={Boolean(data.freeAnswerFlag)}
            manyChoiceFlag={Boolean(data.manyChoiceFlag)}
            hideResultsFlag={Boolean(data.hideResultsFlag)}
            onVote={onVote}
            onUnvote={onUnvote}
            freeAnswersData={freeAnswersData}
            onFreeAnswer={onFreeAnswer}
          />
        </motion.div>
      ) : (
        isError && <motion.div {...motionFade}>{SURVEY_RESULTS_ERROR}</motion.div>
      )}
    </AnimatePresence>
  );
};
