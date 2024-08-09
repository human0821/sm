import { createSlice } from "@reduxjs/toolkit";

import { logout } from "../user/slice";

const initialState: SurveySlice.State = { data: [] };

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  extraReducers: (builder) => {
    // https://stackoverflow.com/a/75709373
    // Чистим кеш голосования после логаута
    builder.addCase(logout, (state) => {
      state.data = [];
    });
  },
  reducers: {
    setSurveyAnswers(state, { payload }: P<SurveySlice.State["data"]>) {
      const ids = new Set(state.data.map((item) => item.newsId));
      payload.forEach((item) => {
        if (!ids.has(item.newsId)) state.data = [...state.data, item];
      });
    },
    setCommentsCount(state, { payload }: { payload: { newsId: number; value: number } }) {
      const { newsId, value } = payload;
      const foundSurvey = state.data.find((survey) => survey.newsId === newsId);
      if (foundSurvey) foundSurvey.commentsCount = value;
    },
    setSurveyFreeAnswer(
      state,
      { payload }: { payload: { newsId: number; answerId: number; answer: { answer: string; isAnonymous: boolean } } },
    ) {
      const {
        newsId,
        answerId,
        answer: { answer },
      } = payload;
      state.data
        .find((survey) => survey.newsId === newsId)
        ?.answers.push({
          id: answerId,
          answer,
          freeAnswer: true,
          answered: true,
          result: null,
        });
    },
    setSurveyAnswer(state, { payload }: { payload: { newsId: number; answerId: number; answer: boolean } }) {
      const { newsId, answerId, answer } = payload;
      const answers = state.data.find((survey) => survey.newsId === newsId)?.answers || [];
      const foundAnswer = answers.find((answer) => answer.id === answerId);
      const foundAnswerIndex = answers.findIndex((answer) => answer.id === answerId);
      if (foundAnswer) {
        if (foundAnswer.freeAnswer) {
          answers.splice(foundAnswerIndex, 1);
        } else {
          foundAnswer.answered = answer;
        }
      }
    },
    setSurveyPercents(state, { payload }: { payload: { newsId: number; percents: Record<string, number> } }) {
      const { newsId, percents } = payload;
      const answers = state.data.find((survey) => survey.newsId === newsId)?.answers || [];
      answers.forEach((answer) => {
        const answerText = answer.answer;
        answer.result = (answerText in percents && percents[answerText]) || 0;
      });
    },
    setSurveyAnswersForNewsId(state, { payload }: { payload: { newsId: number; answers: SurveySlice.Answer[] } }) {
      const { newsId, answers } = payload;
      const foundSurvey = state.data.find((survey) => survey.newsId === newsId);
      if (foundSurvey?.answers) {
        foundSurvey.answers = answers;
      }
    },
  },
});

export const { setSurveyAnswers } = surveySlice.actions;

export default surveySlice.reducer;
