import type { NewsRequestAdmin, NewsResponseAdmin } from "./newsAdmin/types";

import { CONTENT_ROLE_DEFAULT } from "@/shared/consts/content";
import ContentTypes from "@/shared/consts/contentTypes";
import { getClientShortDate, objectKeysToCamel } from "@/shared/utils/stringHelpers";

import NewsEndpoints from "./endpoints";
import { apiSlice } from "..";

export enum NewsType {
  Survey = "Опрос",
  News = "Новость",
}

export const newsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getNewsPinned: builder.query<NewsEntity.Card<NewsType>[], void>({
      query: () => {
        return {
          url: NewsEndpoints.PINNED(),
          method: "GET",
        };
      },
      providesTags: ["NewsPinned"],
      transformResponse(response: News.SnippetResponse<NewsType>[]): NewsEntity.Card<NewsType>[] {
        return response.map(
          (newsCard): NewsEntity.Card<NewsType> => ({
            id: newsCard.id,
            newsType: newsCard.newsType,
            header: newsCard.header,
            date: getClientShortDate(newsCard.datePublish),
            answers: newsCard.answers,
            categoryName: newsCard.roles?.[0]?.name || CONTENT_ROLE_DEFAULT,
            commentsCount: newsCard.comments,
            isImportant: newsCard.importantFlag,
            forAllFlag: newsCard.forAllFlag,
            roles: newsCard.roles || [],
          }),
        );
      },
    }),
    getNewsLast: builder.query<News.ListResponse, News.ListRequest>({
      query: (params) => {
        return {
          url: NewsEndpoints.LIST(),
          method: "GET",
          params,
        };
      },
      transformResponse(response: News.LastResponse): News.ListResponse {
        return {
          ...response,
          items: response.items.map(
            (newsCard: News.SnippetResponse<NewsType>): NewsEntity.Card<NewsType> => ({
              id: newsCard.id,
              newsType: newsCard.newsType,
              header: newsCard.header,
              date: getClientShortDate(newsCard.datePublish),
              answers:
                newsCard.answers?.map((answer) => ({
                  id: answer.id,
                  answer: answer.answer,
                  percent: answer.result,
                  freeAnswer: answer.freeAnswer,
                  isAnswer: answer.answered,
                })) || null,
              categoryName: newsCard.roles?.[0]?.name || CONTENT_ROLE_DEFAULT,
              commentsCount: newsCard.comments,
              isImportant: newsCard.importantFlag,
              forAllFlag: newsCard.forAllFlag,
              freeAnswerFlag: newsCard.freeAnswerFlag || false,
              manyChoiceFlag: newsCard.manyChoiceFlag || false,
              hideResultsFlag: newsCard.hideResultsFlag || false,
              roles: newsCard.roles || [],
            }),
          ),
        };
      },
      serializeQueryArgs({ endpointName }) {
        return endpointName;
      },
      merge(currentCache, newItems, { arg }) {
        if (arg.page === 1) {
          currentCache.items = newItems.items;
        } else {
          currentCache.items.push(...newItems.items);
        }
      },
      forceRefetch({ currentArg, previousArg }) {
        if (typeof currentArg === "object" && typeof previousArg === "object") {
          return (
            (Object.keys(currentArg) as (keyof typeof currentArg)[]).findIndex(
              (key) => currentArg[key] !== previousArg[key],
            ) !== -1
          );
        } else {
          return true;
        }
      },
      keepUnusedDataFor: 30,
      providesTags: ["NewsLast"],
    }),
    getNewsDetail: builder.query<NewsBox.DetailEntity<NewsType>, News.DetailRequest>({
      query: ({ id }) => {
        return {
          url: NewsEndpoints.DETAIL(id),
          method: "GET",
        };
      },
      transformResponse: (response: News.DetailResponse<NewsType>) => {
        return {
          ...objectKeysToCamel(response),
          answers: response.answers?.map((answer) => objectKeysToCamel(answer)),
        } as NewsBox.DetailEntity<NewsType>;
      },
      providesTags: ["NewsDetail"],
    }),

    getNewsComments: builder.query<UserComment.CommentEntity[], CommentApi.GetAllRequest>({
      query: ({ id }) => {
        return {
          url: NewsEndpoints.COMMENTS(id),
          method: "GET",
        };
      },
      transformResponse: (response: CommentApi.CommentResponse[]) => {
        return response
          .map((entity) => objectKeysToCamel(entity))
          .map((entity) => ({
            ...entity,
            author: entity.author ? objectKeysToCamel(entity.author) : null,
          })) as UserComment.CommentEntity[];
      },
      providesTags: ["NewsComments"],
    }),

    addComment: builder.mutation<UserComment.CommentEntity, CommentApi.AddRequest>({
      query: ({ id, ...body }) => {
        return {
          body,
          url: NewsEndpoints.COMMENTS(id),
          method: "POST",
          headers: {
            "Content-Type": ContentTypes.APPLICATION_JSON,
          },
        };
      },
      transformResponse: (response: CommentApi.CommentResponse) => {
        return objectKeysToCamel(response) as UserComment.CommentEntity;
      },
      invalidatesTags: ["NewsComments"],
    }),
    deleteComment: builder.mutation<void, CommentApi.DeleteRequest>({
      query: ({ nid, cid }) => {
        return {
          url: NewsEndpoints.COMMENT(nid, cid),
          method: "DELETE",
        };
      },
      invalidatesTags: ["NewsComments"],
    }),

    likeComment: builder.mutation<void, CommentApi.LikeRequest>({
      query: ({ nid, cid, ...body }) => {
        return {
          body,
          url: NewsEndpoints.COMMENT_LIKE(nid, cid),
          method: "PATCH",
          headers: {
            "Content-Type": ContentTypes.APPLICATION_JSON,
          },
        };
      },
    }),

    editComment: builder.mutation<void, CommentApi.EditRequest>({
      query: ({ nid, cid, ...body }) => {
        return {
          body,
          url: NewsEndpoints.COMMENT(nid, cid),
          method: "PATCH",
          headers: {
            "Content-Type": ContentTypes.APPLICATION_JSON,
          },
        };
      },
      invalidatesTags: ["NewsComments"],
    }),
    voteSurvey: builder.mutation<SurveyApi.VoteResponse, SurveyApi.VoteRequest>({
      query: ({ nid, ...body }) => {
        return {
          body,
          url: NewsEndpoints.VOTE(nid),
          method: "POST",
          headers: {
            "Content-Type": ContentTypes.APPLICATION_JSON,
          },
        };
      },
      transformResponse(response: SurveyApi.VoteResponse | null): SurveyApi.VoteResponse {
        return response === null ? {} : response;
      },
      invalidatesTags: ["FreeAnswers", "NewsDetail"],
    }),

    unvoteSurvey: builder.mutation<void, SurveyApi.CancelVoteRequest>({
      query: ({ nid, answerId }) => ({ url: NewsEndpoints.VOTE_CANCEL(nid, answerId), method: "DELETE" }),
      invalidatesTags: ["NewsDetail", "FreeAnswers"],
    }),

    freeAnswers: builder.query<NewsBox.FreeAnswersResponseEntity, SurveyApi.ResultsRequest>({
      query: ({ nid }) => ({ url: NewsEndpoints.FREE_ANSWERS(nid), method: "GET" }),
      transformResponse: (response: SurveyApi.FreeAnswersResponse) => {
        return {
          ...response,
          items: response.items
            .map((entity) => objectKeysToCamel(entity))
            .map((entity) => ({
              ...entity,
              user: entity.user ? objectKeysToCamel(entity.user) : null,
            })),
        } as NewsBox.FreeAnswersResponseEntity;
      },
      providesTags: ["FreeAnswers"],
    }),

    resultsSurvey: builder.query<void, SurveyApi.ResultsRequest>({
      query: ({ nid }) => ({ url: NewsEndpoints.VOTE(nid), method: "GET" }),
    }),
    cancelVoteSurvey: builder.mutation<void, SurveyApi.CancelVoteRequest>({
      query: ({ nid }) => {
        return {
          url: NewsEndpoints.VOTE_CANCEL(nid),
          method: "DELETE",
        };
      },
      invalidatesTags: ["NewsDetail"],
    }),
  }),
});

export const {
  useFreeAnswersQuery,
  useGetNewsPinnedQuery,
  useGetNewsLastQuery,
  useGetNewsDetailQuery,
  useGetNewsCommentsQuery,
  useAddCommentMutation,
  useDeleteCommentMutation,
  useLikeCommentMutation,
  useVoteSurveyMutation,
  useUnvoteSurveyMutation,
  useResultsSurveyQuery,
  useLazyResultsSurveyQuery,
  useEditCommentMutation,
  useCancelVoteSurveyMutation,
} = newsApi;

/** Конечные точки админки новостей */
export const newsAdminApi = newsApi.injectEndpoints({
  endpoints: (build) => ({
    getAllNews: build.query<NewsResponseAdmin["GetNewsFeed"], NewsRequestAdmin["GetAllNews"]>({
      query: (params) => ({
        url: NewsEndpoints.admin.NEWS,
        params,
      }),
    }),
    createNews: build.mutation<NewsResponseAdmin["CreateNews"], NewsRequestAdmin["CreateNews"]>({
      query: (body) => {
        return {
          body,
          url: NewsEndpoints.admin.NEWS,
          method: "POST",
        };
      },
    }),
  }),
});
