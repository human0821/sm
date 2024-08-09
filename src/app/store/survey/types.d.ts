declare namespace SurveySlice {
  interface Answer {
    id: number;
    answer: string;
    answered: boolean;
    freeAnswer: boolean | null;
    result: null | number;
  }
  interface State {
    data: { newsId: number; commentsCount: number; answers: Answer[] }[];
  }
}
