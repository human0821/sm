declare namespace SurveyApi {
  interface Answer {
    id: number;
    answer: string;
    answered?: boolean;
    free_answer?: boolean;
    result?: number;
  }
  interface VoteRequest {
    nid: string | number;
    id: number | null;
    answer: string | null;
    free_answer: boolean | null;
    is_anonymous?: boolean;
  }
  type VoteResponse = Record<string, number>;
  interface ResultsRequest {
    nid: string;
  }
  interface CancelVoteRequest {
    nid: string | number;
    answerId?: string;
  }
  interface FreeAnswersResponse {
    items: {
      id: number;
      answer: string;
      free_answer: boolean | null;
      created: string;
      user: {
        id: string;
        avatar: string | null;
        shortened_name: string | null;
      } | null;
    }[];
    total: number | null;
    limit: number | null;
    offset: number | null;
  }
}
declare namespace News {
  interface Role {
    id: number;
    name: string;
  }
  interface DetailRequest {
    id: string;
  }
  interface DetailResponse<T> {
    news_type: T;
    id: number;
    text: string;
    banner: string | null;
    dateFinish: string;
    datePublish: string;
    header: string;
    answers: SurveyApi.Answer[] | null;
    roles: Role[] | null;
    comment_flag: boolean;
    important_flag: boolean;
    for_all_flag: boolean;
    pin_flag: boolean | null;
    free_answer_flag: boolean | null;
    hide_results_flag: boolean | null;
  }
  interface SnippetResponse<T> {
    newsType: T;
    id: number;
    banner: string | null;
    dateFinish: Date | string;
    datePublish: Date | string;
    header: string;
    answers: Survey.Answer[] | null;
    roles: Role[] | null;
    comments: number;
    forAllFlag: boolean;
    importantFlag: boolean;
    freeAnswerFlag: boolean | null;
    manyChoiceFlag: boolean | null;
    hideResultsFlag: boolean | null;
  }
  interface ListRequest {
    search?: string;
    news_type?: string;
    date_publish?: Date | string;
    date_finish?: Date | string;
    page?: number;
    size?: number;
  }
  interface ListResponse {
    items: NewsEntity.Card<T>[];
    page: number;
    pages: number;
    size: number;
    total: number;
  }
  interface LastResponse {
    items: SnippetResponse<T>[];
    page: number;
    pages: number;
    size: number;
    total: number;
  }
}

declare namespace CommentApi {
  interface Author {
    shortened_name: string;
    avatar: string | null;
  }
  interface GetAllRequest {
    id: string;
  }
  interface CommentResponse {
    id: number;
    text: string;
    created: string;
    likes: number;
    dislikes: number;
    anonymous_flag: boolean;
    parent_id: number | null;
    author: Author | null;
    children: CommentResponse[] | null;
    like: "liked" | "disliked" | null;
    can_edit: boolean;
    can_delete: boolean;
  }

  interface AddRequest {
    id: string;
    text: string;
    anonymous_flag: boolean;
    parent_id: number | null;
  }
  interface DeleteRequest {
    nid: string;
    cid: string;
  }
  interface LikeRequest {
    nid: string;
    cid: string;
    like: boolean;
  }
  interface EditRequest {
    nid: string;
    cid: string;
    text: string;
  }
}
