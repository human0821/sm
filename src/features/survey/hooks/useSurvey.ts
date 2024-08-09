import { useCallback, useState } from "react";

import { type NewsType, useCancelVoteSurveyMutation, useVoteSurveyMutation } from "@/app/api/news/api";

export function useSurvey({ survey }: { survey: NewsEntity.Card<NewsType> }) {
  const [cancelVoteSurvey] = useCancelVoteSurveyMutation();
  const [voteSurvey] = useVoteSurveyMutation();

  const [answersItems, setAnswersItems] = useState<Survey.Item[]>(() => {
    const answeredSurvey = survey.answers?.find((answer) => answer.isAnswer);
    const otherPercent =
      survey.answers?.reduce((current, answer) => current - (answer.freeAnswer ? 0 : answer.percent || 0), 100) || 0;
    const answers =
      survey.answers?.map((answer): Survey.Item => {
        const newAnswer = {
          ...answer,
          canSelect: !answeredSurvey,
        };

        if (answer.freeAnswer) {
          newAnswer.id = undefined;
          newAnswer.percent = survey.hideResultsFlag ? undefined : otherPercent;
        } else {
          newAnswer.percent = survey.hideResultsFlag ? undefined : answer.percent;
        }

        return newAnswer;
      }) || [];

    if (survey.freeAnswerFlag) {
      if (answeredSurvey && !answeredSurvey.freeAnswer && otherPercent) {
        answers.push({
          answer: "Другое",
          freeAnswer: true,
          canSelect: false,
          isAnswer: false,
          percent: otherPercent,
        });
      }
      if (!answeredSurvey) {
        answers.push({
          answer: "",
          freeAnswer: true,
          canSelect: true,
          isAnswer: false,
        });
      }
    }

    return answers;
  });

  const handleSelect = useCallback(
    (answer: Survey.Item, resolve?: (value: unknown) => void, reject?: (value: unknown) => void) => {
      voteSurvey({
        id: answer.freeAnswer ? null : answer.id || null,
        answer: answer.answer,
        nid: survey.id,
        free_answer: answer.freeAnswer || false,
        is_anonymous: answer.isAnonymous,
      })
        .unwrap()
        .then((results) => {
          const otherPercent = Object.keys(results)?.reduce((current, key) => current - results[key], 100) || 0;
          setAnswersItems(
            answersItems.map((answerItem) => {
              const isSelectedAnswer = answer.id === answerItem.id;
              const percent = answerItem.freeAnswer ? otherPercent : results[answerItem.answer];
              const newAnswer = {
                ...answerItem,
                isAnswer: isSelectedAnswer,
                canSelect: false,
                percent: survey.hideResultsFlag ? undefined : percent,
              };

              if (isSelectedAnswer) {
                newAnswer.answer = answer.answer;
              } else {
                newAnswer.answer = answerItem.freeAnswer ? "Другое" : answerItem.answer;
              }

              return newAnswer;
            }),
          );
          resolve?.(true);
        })
        .catch(() => {
          reject?.(false);
        });
    },
    [setAnswersItems],
  );

  const handleCancel = useCallback(
    (answer: Survey.Item, resolve?: (value: unknown) => void, reject?: (value: unknown) => void) => {
      cancelVoteSurvey({ nid: survey.id })
        .unwrap()
        .then(() => {
          setAnswersItems(
            answersItems.map((answerItem) => ({
              ...answerItem,
              isAnswer: false,
              canSelect: true,
              // Скрываем свободные ответы. Открываем форму.
              isShow: answerItem.id === undefined ? true : !answerItem.freeAnswer,
            })),
          );
          resolve?.(true);
        })
        .catch(() => {
          reject?.(false);
        });
    },
    [setAnswersItems],
  );

  return { answersItems, handleSelect, handleCancel };
}
