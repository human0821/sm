declare namespace NewsEntity {
  export interface Card<T> {
    id: number;
    newsType: T;
    header: string;
    commentsCount?: number;
    date: string;
    isImportant?: boolean;
    categoryName: string;
    freeAnswerFlag?: boolean;
    manyChoiceFlag?: boolean;
    hideResultsFlag?: boolean;
    forAllFlag?: boolean;
    hideResultsFlag?: boolean;
    answers: Survey.Item[] | null;
    roles: StoreUser.UserRole[];
  }
}

type NewsStatus = "Не активен" | "Активен" | "К публикации";
