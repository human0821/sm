import type { NewsTypeEnum } from "@/app/api/apiGenerator/admin/newsAdminApi";

export const SELECT_OPTIONS_NEWS_TYPE: { name: string; value: NewsTypeEnum }[] = [
  { name: "Новость", value: "Новость" },
  { name: "Опрос", value: "Опрос" },
];
