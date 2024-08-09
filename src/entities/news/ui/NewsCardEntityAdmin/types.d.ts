import type { NewsListSchema } from "@/app/api/apiGenerator/common/newsApi";

type NewsCardV2Props = Pick<NewsListSchema, "newsType" | "header" | "id" | "datePublish"> &
  Partial<Pick<NewsListSchema, "roles" | "comments" | "importantFlag" | "forAllFlag">>;
