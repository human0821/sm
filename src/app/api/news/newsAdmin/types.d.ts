import type { NewsType } from "../api";

export interface NewsAdminEntity {
  newsType: NewsType;
  id: number;
  text: string;
  banner: string | null;
  dateFinish: string;
  datePublish: string;
  header: string;
  answers: SurveyApi.Answer[] | null;
  roles: Role[] | null;
  commentFlag: boolean;
  importantFlag: boolean;
  forAllFlag: boolean;
  pinFlag: boolean | null;
  freeAnswerFlag: boolean | null;
  hideResultsFlag: boolean | null;
}

export interface NewsId {
  newsId: number;
}

/** Типы ответа новостей от сервера SM Administration API*/
interface NewsResponseAdmin {
  CreateNews: NewsAdminEntity;

  GetNewsFeed: {
    total: number;
    page: number;
    size: number;
    results: {
      id: number;
      newsType: string;
      datePublish: string;
      dateFinish: string;
      header: string;
      banner: string;
      roles: number[];
    }[];
  };

  GetPinnedNews: number;
  DelNews: string;
  PutNews: NewsAdminEntity;
  GetNewsDetail: NewsAdminEntity;
}

/** Типы запросов новостей от сервера SM Administration API */
interface NewsRequestAdmin {
  CreateNews: NewsAdminEntity;
  GetAllNews: {
    search: string;
    newsType: string;
    datePublish: string;
    dateFinish: string;
    roles: string[];
    page?: number;
    size?: number;
  };
  DeleteNews: NewsId;
  PutNews: NewsId & NewsAdminEntity;
  GetDetail: NewsId;
}
