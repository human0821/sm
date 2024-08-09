import { apiSlice as api } from "../../index";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllUnpinnedNews: build.query<ApiV1NewsGetApiResponse, ApiV1NewsGetApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/news`,
        params: { search: queryArg.search, newsType: queryArg.newsType, page: queryArg.page, size: queryArg.size },
      }),
    }),
    getAllPinnedNews: build.query<ApiV1NewsPinnedGetApiResponse, ApiV1NewsPinnedGetApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/news/pinned`,
        params: { search: queryArg.search, newsType: queryArg.newsType },
      }),
    }),
    getNewsDetail: build.query<ApiV1NewsNewsIdGetApiResponse, ApiV1NewsNewsIdGetApiArg>({
      query: (queryArg) => ({ url: `/api/v1/news/${queryArg.newsId}` }),
    }),
    getFreeAnswers: build.query<ApiV1NewsNewsIdFreeAnswersGetApiResponse, ApiV1NewsNewsIdFreeAnswersGetApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/news/${queryArg.newsId}/free_answers`,
        params: { limit: queryArg.limit, offset: queryArg.offset },
      }),
    }),
    answerSurvey: build.mutation<ApiV1NewsNewsIdVotePostApiResponse, ApiV1NewsNewsIdVotePostApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/news/${queryArg.newsId}/vote`,
        method: "POST",
        body: queryArg.answerUserSchema,
      }),
    }),
    getResults: build.query<ApiV1NewsNewsIdVoteGetApiResponse, ApiV1NewsNewsIdVoteGetApiArg>({
      query: (queryArg) => ({ url: `/api/v1/news/${queryArg.newsId}/vote` }),
    }),
    unvoteSurvey: build.mutation<ApiV1NewsNewsIdUnvoteDeleteApiResponse, ApiV1NewsNewsIdUnvoteDeleteApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/news/${queryArg.newsId}/unvote`,
        method: "DELETE",
        params: { answerId: queryArg.answerId },
      }),
    }),
    postComment: build.mutation<ApiV1NewsNewsIdCommentsPostApiResponse, ApiV1NewsNewsIdCommentsPostApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/news/${queryArg.newsId}/comments`,
        method: "POST",
        body: queryArg.commentCreateSchema,
      }),
    }),
    getComments: build.query<ApiV1NewsNewsIdCommentsGetApiResponse, ApiV1NewsNewsIdCommentsGetApiArg>({
      query: (queryArg) => ({ url: `/api/v1/news/${queryArg.newsId}/comments` }),
    }),
    patchComment: build.mutation<
      ApiV1NewsNewsIdCommentsCommentIdPatchApiResponse,
      ApiV1NewsNewsIdCommentsCommentIdPatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/news/${queryArg.newsId}/comments/${queryArg.commentId}`,
        method: "PATCH",
        body: queryArg.commentUpdateSchema,
      }),
    }),
    deleteComment: build.mutation<
      ApiV1NewsNewsIdCommentsCommentIdDeleteApiResponse,
      ApiV1NewsNewsIdCommentsCommentIdDeleteApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/news/${queryArg.newsId}/comments/${queryArg.commentId}`, method: "DELETE" }),
    }),
    likeComment: build.mutation<
      ApiV1NewsNewsIdCommentsCommentIdLikeDislikePatchApiResponse,
      ApiV1NewsNewsIdCommentsCommentIdLikeDislikePatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/news/${queryArg.newsId}/comments/${queryArg.commentId}/like_dislike`,
        method: "PATCH",
        body: queryArg.likesDislikesSchema,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as _newsApi };
export type ApiV1NewsGetApiResponse = /** status 200 Successful Response */ PageNewsListSchema;
export type ApiV1NewsGetApiArg = {
  search?: string | null;
  newsType?: string | null;
  /** Page number */
  page?: number;
  /** Page size */
  size?: number;
};
export type ApiV1NewsPinnedGetApiResponse = /** status 200 Successful Response */ NewsListSchema[];
export type ApiV1NewsPinnedGetApiArg = {
  search?: string | null;
  newsType?: string | null;
};
export type ApiV1NewsNewsIdGetApiResponse = /** status 200 Successful Response */ NewsDetailSchema;
export type ApiV1NewsNewsIdGetApiArg = {
  newsId: number;
};
export type ApiV1NewsNewsIdFreeAnswersGetApiResponse =
  /** status 200 Successful Response */ LimitOffsetPageFreeAnswerSchema;
export type ApiV1NewsNewsIdFreeAnswersGetApiArg = {
  newsId: number;
  /** Page size limit */
  limit?: number;
  /** Page offset */
  offset?: number;
};
export type ApiV1NewsNewsIdVotePostApiResponse = /** status 200 Successful Response */ object | null;
export type ApiV1NewsNewsIdVotePostApiArg = {
  newsId: number;
  answerUserSchema: AnswerUserSchema;
};
export type ApiV1NewsNewsIdVoteGetApiResponse = /** status 200 Successful Response */ any;
export type ApiV1NewsNewsIdVoteGetApiArg = {
  newsId: number;
};
export type ApiV1NewsNewsIdUnvoteDeleteApiResponse = /** status 200 Successful Response */ any;
export type ApiV1NewsNewsIdUnvoteDeleteApiArg = {
  newsId: number;
  answerId?: number | null;
};
export type ApiV1NewsNewsIdCommentsPostApiResponse = /** status 200 Successful Response */ CommentSchema;
export type ApiV1NewsNewsIdCommentsPostApiArg = {
  newsId: number;
  commentCreateSchema: CommentCreateSchema;
};
export type ApiV1NewsNewsIdCommentsGetApiResponse = /** status 200 Successful Response */ CommentManualSchema[];
export type ApiV1NewsNewsIdCommentsGetApiArg = {
  newsId: number;
};
export type ApiV1NewsNewsIdCommentsCommentIdPatchApiResponse = /** status 200 Successful Response */ CommentSchema;
export type ApiV1NewsNewsIdCommentsCommentIdPatchApiArg = {
  newsId: number;
  commentId: number;
  commentUpdateSchema: CommentUpdateSchema;
};
export type ApiV1NewsNewsIdCommentsCommentIdDeleteApiResponse = /** status 200 Successful Response */ any;
export type ApiV1NewsNewsIdCommentsCommentIdDeleteApiArg = {
  newsId: number;
  commentId: number;
};
export type ApiV1NewsNewsIdCommentsCommentIdLikeDislikePatchApiResponse = /** status 200 Successful Response */ any;
export type ApiV1NewsNewsIdCommentsCommentIdLikeDislikePatchApiArg = {
  newsId: number;
  commentId: number;
  likesDislikesSchema: LikesDislikesSchema;
};
export type RoleSchema = {
  id: number;
  name: string;
};
export type AnswerUserListSchema = {
  id: number;
  answer: string;
  result?: number | null;
  freeAnswer?: boolean | null;
  answered: boolean;
};
export type NewsListSchema = {
  id: number;
  newsType: string;
  datePublish: string;
  dateFinish: string;
  header: string;
  importantFlag: boolean;
  forAllFlag: boolean;
  freeAnswerFlag?: boolean | null;
  hideResultsFlag?: boolean | null;
  manyChoiceFlag?: boolean | null;
  banner?: string | null;
  roles: RoleSchema[];
  answers: AnswerUserListSchema[] | null;
  comments?: number;
};
export type PageNewsListSchema = {
  items: NewsListSchema[];
  total: number | null;
  page: number | null;
  size: number | null;
  pages?: number | null;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type NewsTypeEnum = "\u041E\u043F\u0440\u043E\u0441" | "\u041D\u043E\u0432\u043E\u0441\u0442\u044C";
export type NewsDetailSchema = {
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
  forAllFlag: boolean;
  manyChoiceFlag?: boolean | null;
  roles?: RoleSchema[] | null;
  answers?: AnswerUserListSchema[] | null;
  id: number;
  banner?: string | null;
  comments?: number;
};
export type UserAnswerSchema = {
  id: string;
  avatar?: string | null;
  fullName?: string | null;
};
export type FreeAnswerSchema = {
  id: number;
  answer: string;
  freeAnswer?: boolean | null;
  created: string;
  user?: UserAnswerSchema | null;
};
export type LimitOffsetPageFreeAnswerSchema = {
  items: FreeAnswerSchema[];
  total: number | null;
  limit: number | null;
  offset: number | null;
};
export type AnswerUserSchema = {
  id?: number | null;
  answer?: string | null;
  freeAnswer?: boolean | null;
  isAnonymous?: boolean | null;
};
export type UserNameSchema = {
  fullName?: string | null;
};
export type CommentSchema = {
  id: number;
  text: string;
  created: string;
  likes: number;
  dislikes: number;
  anonymousFlag: boolean;
  parentId: number | null;
  author?: UserNameSchema | null;
  children?: CommentSchema[] | null;
};
export type CommentCreateSchema = {
  text: string;
  anonymousFlag: boolean;
  parentId?: number | null;
};
export type UserCommentSchema = {
  fullName?: string | null;
  avatar?: string | null;
};
export type CommentManualSchema = {
  id: number;
  text: string;
  created: string;
  likes: number;
  dislikes: number;
  anonymousFlag: boolean;
  parentId: number | null;
  author?: UserCommentSchema | null;
  children?: any[] | null;
  canEdit: boolean;
  canDelete: boolean;
  like?: string | null;
};
export type CommentUpdateSchema = {
  text: string;
};
export type LikesDislikesSchema = {
  like: boolean;
};
