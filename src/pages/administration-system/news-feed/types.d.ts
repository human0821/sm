export interface NewsFeedResponse {
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
    roles: unknown[];
  }[];
}
