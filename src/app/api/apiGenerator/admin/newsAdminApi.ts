import { apiSlice as api } from "../../index";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postNewsAdmin: build.mutation<ApiV1NewsPostApiResponse, ApiV1NewsPostApiArg>({
      query: (queryArg) => ({ url: `administration/api/v1/news`, method: "POST", body: queryArg.ApiV1NewsPost }),
    }),
    getAllNewsAdmin: build.query<ApiV1NewsGetApiResponse, ApiV1NewsGetApiArg>({
      query: (queryArg) => ({
        url: `administration/api/v1/news`,
        params: {
          search: queryArg.search,
          newsType: queryArg.newsType,
          datePublish: queryArg.datePublish,
          dateFinish: queryArg.dateFinish,
          roles: queryArg.roles,
          page: queryArg.page,
          size: queryArg.size,
        },
      }),
    }),
    getPinnedNewsAmountAdmin: build.query<ApiV1NewsPinnedGetApiResponse, ApiV1NewsPinnedGetApiArg>({
      query: () => ({ url: `administration/api/v1/news/pinned` }),
    }),
    deleteNewsAdmin: build.mutation<ApiV1NewsNewsIdDeleteApiResponse, ApiV1NewsNewsIdDeleteApiArg>({
      query: (queryArg) => ({ url: `administration/api/v1/news/${queryArg.newsId}`, method: "DELETE" }),
    }),
    putNewsAdmin: build.mutation<ApiV1NewsNewsIdPutApiResponse, ApiV1NewsNewsIdPutApiArg>({
      query: (queryArg) => ({
        url: `administration/api/v1/news/${queryArg.newsId}`,
        method: "PUT",
        body: queryArg.ApiV1NewsNewsIdPut,
      }),
    }),
    getNewsDetailAdmin: build.query<ApiV1NewsNewsIdGetApiResponse, ApiV1NewsNewsIdGetApiArg>({
      query: (queryArg) => ({ url: `administration/api/v1/news/${queryArg.newsId}` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as _newsAdminApi };
export type ApiV1NewsPostApiResponse = /** status 200 Successful Response */ NewsSchema | object;
export type ApiV1NewsPostApiArg = {
  ApiV1NewsPost: ApiV1NewsPost;
};
export type ApiV1NewsGetApiResponse = /** status 200 Successful Response */ PagedResponseSchemaNewsListSchema;
export type ApiV1NewsGetApiArg = {
  search?: string | null;
  newsType?: string | null;
  datePublish?: string | null;
  dateFinish?: string | null;
  roles?: string | null;
  page?: number;
  size?: number;
};
export type ApiV1NewsPinnedGetApiResponse = /** status 200 Successful Response */ object;
export type ApiV1NewsPinnedGetApiArg = void;
export type ApiV1NewsNewsIdDeleteApiResponse = /** status 200 Successful Response */ any;
export type ApiV1NewsNewsIdDeleteApiArg = {
  newsId: number;
};
export type ApiV1NewsNewsIdPutApiResponse = /** status 200 Successful Response */ NewsSchema;
export type ApiV1NewsNewsIdPutApiArg = {
  newsId: number;
  ApiV1NewsNewsIdPut: ApiV1NewsNewsIdPut;
};
export type ApiV1NewsNewsIdGetApiResponse = /** status 200 Successful Response */ NewsSchema;
export type ApiV1NewsNewsIdGetApiArg = {
  newsId: number;
};
export type NewsTypeEnum = "\u041E\u043F\u0440\u043E\u0441" | "\u041D\u043E\u0432\u043E\u0441\u0442\u044C";
export type RoleSchema = {
  id: number;
  name: string;
};
export type AnswerSchema = {
  id: number;
  answer: string;
};
export type NewsSchema = {
  newsType: NewsTypeEnum;
  datePublish: string;
  dateFinish: string;
  header: string;
  text?: string | null;
  commentFlag: boolean;
  importantFlag?: boolean | null;
  pinFlag?: boolean | null;
  freeAnswerFlag?: boolean | null;
  hideResultsFlag?: boolean | null;
  forAllFlag?: boolean | null;
  manyChoiceFlag?: boolean | null;
  roles?: RoleSchema[] | null;
  answers?: AnswerSchema[] | null;
  id: number;
  banner?: string | null;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type ApiV1NewsPost = {
  newsType: NewsTypeEnum;
  datePublish: string;
  dateFinish: string;
  header: string;
  text?: string | null;
  commentFlag: boolean;
  importantFlag: boolean;
  pinFlag: boolean;
  freeAnswerFlag?: boolean | null;
  hideResultsFlag?: boolean | null;
  forAllFlag?: boolean | null;
  manyChoiceFlag?: boolean | null;
  roles?: string | null;
  answers?: string | null;
  banner?: Blob;
};
export type NewsListSchema = {
  id: number;
  newsType: string;
  datePublish: string;
  dateFinish: string;
  header: string;
  banner?: string | null;
  roles?: RoleSchema[];
  activity: string;
  comments: number;
};
export type PagedResponseSchemaNewsListSchema = {
  total: number;
  page: number;
  size: number;
  results: NewsListSchema[];
};
export type ApiV1NewsNewsIdPut = {
  newsType: NewsTypeEnum;
  datePublish: string;
  dateFinish: string;
  header: string;
  text?: string | null;
  commentFlag: boolean;
  importantFlag: boolean;
  pinFlag: boolean;
  freeAnswerFlag?: boolean | null;
  hideResultsFlag?: boolean | null;
  forAllFlag?: boolean | null;
  manyChoiceFlag?: boolean | null;
  roles?: string | null;
  answers?: string | null;
  banner?: Blob;
};
