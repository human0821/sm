import type { NewsType } from "@/app/api/news/api";

import { Stack } from "@mui/material";

import { NewsCardEntity } from "@/entities/news";

import { useSurveyAnswers } from "../../hooks/useSurveyAnswers";
import { SurveyInput } from "../Input/SurveyInput";
import { SurveyRadio } from "../Radio/SurveyRadio";

export function SurveyForm({ newsCard }: { newsCard: NewsEntity.Card<NewsType> }) {
  const {
    answersItems,
    newsCard: newsCardUpdated,
    surveyAnswered,
    isFreeAnswerAnswered,
    handleSelect,
    handleCancel,
    handleFreeAnswer,
    voteSurveyState,
    unvoteSurveyState,
    surveyResultsState,
  } = useSurveyAnswers({ survey: newsCard });

  const { freeAnswerFlag, manyChoiceFlag, hideResultsFlag } = newsCard;

  return (
    <NewsCardEntity newsCard={newsCardUpdated}>
      <Stack gap={2.5}>
        {answersItems &&
          answersItems.map((answerItem, index) => {
            const isOtherAnswer = answerItem.id === -1;
            return (
              <SurveyRadio
                key={index}
                isLoading={voteSurveyState.isLoading || unvoteSurveyState.isLoading || surveyResultsState.isLoading}
                surveyAnswered={surveyAnswered || false}
                hideResultsFlag={hideResultsFlag || false}
                surveyItem={answerItem}
                onSelect={() => !isOtherAnswer && handleSelect(answerItem.id)}
                onCancel={() => !isOtherAnswer && handleCancel(answerItem.id)}
              />
            );
          })}
        {freeAnswerFlag && ((!manyChoiceFlag && !surveyAnswered) || (manyChoiceFlag && !isFreeAnswerAnswered)) && (
          <SurveyInput onFreeAnswer={handleFreeAnswer} />
        )}
      </Stack>
    </NewsCardEntity>
  );
}
