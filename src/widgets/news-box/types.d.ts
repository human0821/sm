declare module NewsBox {
  interface FreeAnswersResponseEntity {
    items: {
      id: number;
      answer: string;
      freeAnswer: boolean | null;
      created: string;
      user: {
        id: string;
        avatar: string | null;
        fullName: string | null;
      } | null;
    }[];
    total: number | null;
    limit: number | null;
    offset: number | null;
  }
  interface AnswerEntity {
    id: number;
    answer: string;
    result: number | null;
    freeAnswer: boolean | null;
    answered: boolean;
  }
  interface DetailEntity<T> {
    newsType: T;
    id: number;
    text: string;
    banner: string | null;
    dateFinish: string;
    datePublish: string;
    header: string;
    answers: AnswerEntity[] | null;
    roles: News.Role[] | null;
    commentFlag: boolean;
    forAllFlag: boolean;
    pinFlag: boolean | null;
    freeAnswerFlag: boolean | null;
    hideResultsFlag: boolean | null;
    importantFlag: boolean | null;
    manyChoiceFlag: boolean | null;
  }
  interface Answers {
    answers: AnswerEntity[];
    freeAnswerFlag: boolean;
    manyChoiceFlag: boolean;
    hideResultsFlag: boolean;
    freeAnswersData: NewsBox.FreeAnswersResponseEntity | undefined;
    onVote: React.MouseEventHandler<HTMLDivElement>;
    onUnvote: (answerId?: string) => void;
    onFreeAnswer: (state: TextareaContainer.ContainerState) => void;
  }
}
