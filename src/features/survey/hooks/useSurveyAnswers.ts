import { useSnackbar } from "notistack";

import {
  type NewsType,
  useVoteSurveyMutation,
  useUnvoteSurveyMutation,
  useLazyResultsSurveyQuery,
} from "@/app/api/news/api";
import { useAppSelector } from "@/app/store";
import { Variants } from "@/shared/consts/variants";
import { useActions } from "@/shared/hooks/useActions";
import { OTHER_ANSWER, UNVOTE_ERROR, VOTE_ERROR } from "@/widgets/news-box/consts";

export function useSurveyAnswers({ survey }: { survey: NewsEntity.Card<NewsType> }) {
  const [unvoteSurvey, unvoteSurveyState] = useUnvoteSurveyMutation();
  const [voteSurvey, voteSurveyState] = useVoteSurveyMutation();
  const [surveyResults, surveyResultsState] = useLazyResultsSurveyQuery();
  const { enqueueSnackbar } = useSnackbar();
  const { setSurveyAnswer, setSurveyFreeAnswer, setSurveyPercents } = useActions();

  const surveyItems = useAppSelector(
    (state) => state.survey.data,
    (a, b) => {
      // rerender only changed obj
      return b.find((item) => item.newsId === survey.id) === a.find((item) => item.newsId === survey.id);
    },
  );
  const currentSurvey = surveyItems.find((item) => item.newsId === survey.id);
  const surveyAnswered = currentSurvey?.answers.some((answer) => answer.answered);
  const isFreeAnswerAnswered = currentSurvey?.answers.some((answer) => answer.answered && answer.freeAnswer);
  const newsCard = { ...survey, commentsCount: currentSurvey?.commentsCount || 0 };

  const answersItems = currentSurvey?.answers.map((answer) => ({
    ...answer,
    isAnswer: answer.answered,
    canSelect: true,
    isAnonymous: false,
    isShow: true,
    percent: surveyAnswered ? (answer.result === null ? undefined : answer.result) : undefined,
  }));

  if (answersItems && survey.freeAnswerFlag) {
    const answers = answersItems;
    const allPercents = answers.reduce((previous, current) => previous + (current.result || 0), 0) || 0;
    const remainingPercents = 100 - allPercents;
    if (isFreeAnswerAnswered) {
      const freeAnswer = answers.find((answer) => answer.answered && answer.freeAnswer);
      if (freeAnswer) {
        freeAnswer.result = remainingPercents;
        freeAnswer.percent = remainingPercents;
        freeAnswer.freeAnswer = false;
      }
    } else if (surveyAnswered) {
      const otherAnswer = {
        id: -1,
        answer: OTHER_ANSWER,
        answered: false,
        isAnswer: false,
        canSelect: false,
        isAnonymous: false,
        isShow: true,
        result: remainingPercents,
        percent: remainingPercents,
        freeAnswer: false,
      };
      answersItems.push(otherAnswer);
    }
  }

  const updateAnswer = async (answer: boolean | { answer: string; isAnonymous: boolean }, answerId: number) => {
    if (typeof answer === "boolean") {
      setSurveyAnswer({ newsId: survey.id, answerId, answer });
    } else {
      setSurveyFreeAnswer({ newsId: survey.id, answerId, answer });
    }
    try {
      const percentsMap = await surveyResults({ nid: String(survey.id) }).unwrap();
      setSurveyPercents({ newsId: survey.id, percents: percentsMap as unknown as Record<string, number> });
      // eslint-disable-next-line
    } catch (error) {}
  };

  const handleSelect = async (answerId: number) => {
    try {
      await voteSurvey({ id: answerId, nid: survey.id, answer: null, free_answer: false }).unwrap();
      await updateAnswer(true, answerId);
    } catch (error) {
      enqueueSnackbar(VOTE_ERROR, { variant: Variants.ERROR });
    }
  };

  const handleCancel = async (answerId: number) => {
    try {
      await unvoteSurvey({ nid: Number(survey.id), answerId: String(answerId) }).unwrap();
      await updateAnswer(false, answerId);
    } catch (error) {
      enqueueSnackbar(UNVOTE_ERROR, { variant: Variants.ERROR });
    }
  };

  const handleFreeAnswer = async (answer: string, isAnonymous: boolean) => {
    const freeId = Number(1 + String(Math.random()).split(".")[1].slice(-4));
    try {
      await voteSurvey({
        id: freeId,
        nid: Number(survey.id),
        answer,
        free_answer: true,
        is_anonymous: isAnonymous,
      });
      await updateAnswer({ answer, isAnonymous }, freeId);
    } catch (error) {
      enqueueSnackbar(VOTE_ERROR, { variant: Variants.ERROR });
    }
  };

  return {
    answersItems,
    newsCard,
    surveyAnswered,
    isFreeAnswerAnswered,
    handleSelect,
    handleCancel,
    handleFreeAnswer,
    unvoteSurveyState,
    voteSurveyState,
    surveyResultsState,
  };
}
