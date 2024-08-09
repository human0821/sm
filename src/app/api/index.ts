import { createApi, fetchBaseQuery, type BaseQueryApi, type FetchArgs } from "@reduxjs/toolkit/query/react";
import snakecaseKeys from "snakecase-keys";

import { ActionTypes } from "@/app/store/consts";
import { changeCaseQuery } from "@/shared/utils/apiHelpers";
import { Token } from "@/shared/utils/token";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  prepareHeaders: (headers) => Token.setAuthHeader({ headers }),
});

const baseQueryWithReauth = async (args: string | FetchArgs, api: BaseQueryApi, extraOptions: object) => {
  if (typeof args === "object") {
    if ("body" in args) args.body = changeCaseQuery(args.body, { adapter: snakecaseKeys });
    if (args.params) args.params = changeCaseQuery(args.params, { adapter: snakecaseKeys });
  }

  let result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    const token = await Token.refreshToken();
    console.log("result", result);
    if (token) {
      result = await baseQuery(args, api, extraOptions);
      if (result.error?.status === 401) {
        api.dispatch({ type: ActionTypes.LOGOUT });
      }
    } else {
      console.log("api", api);
      api.dispatch({ type: ActionTypes.LOGOUT });
    }
  }

  if (result.data) {
    result.data = changeCaseQuery(result.data, {
      currentPath: typeof args === "string" ? args : args.url,
      // не преобразуем в camelCase ответы с /api/v1/news/xxx/vote
      blackListApiRegExp: /\/api\/v1\/news\/\d+\/vote/,
    });
  }

  return result;
};

export const tagTypes = [
  "LayoutMenu",
  "BannersPublic",
  "NewsPinned",
  "NewsLast",
  "NewsFeedList",
  "NewsComments",
  "FreeAnswers",
  "NewsDetail",
  "PartnersAddresses",
  "EmployeesList",
  "EmployeeDetail",
  "EmployeesRoles",
  "СounterpartiesList",
  "СounterpartyDetail",
  "CasesDetail",
  "Profile",
  "Roles",
  "DesignSiteSchema",
  "CurrentCase",
  "AccountSettingsWidgets",
  "MainWidgets",
  "PartnersDiscounts",
  "PartnersMarkup",
  "MainInfoCompany",
  "BannersAdminList",
  "PartnersMarkups",
  "MarkupSubsections",
  "MarkupBrands",
] as const;

export type ApiTag = (typeof tagTypes)[number];

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
  tagTypes,
});
