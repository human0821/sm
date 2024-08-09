import ApiMicroservices from "@/app/consts/ApiMicroservices";
import { objectKeysToCamel } from "@/shared/utils/stringHelpers";

import MenuEndpoints from "./endpoints";
import { apiSlice } from "../index";

export const menuApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMenu: builder.query<StoreLayout.Menu[], void>({
      query: () => {
        return {
          url: `${ApiMicroservices.USERS}${MenuEndpoints.GET_MENU}`,
          method: "GET",
        };
      },
      transformResponse(response: ApiMenuResponse.GetMenu[]) {
        return response.map((menu) => {
          return objectKeysToCamel(menu) as StoreLayout.Menu;
        });
      },
      transformErrorResponse(error) {
        return {
          code: error.status,
        };
      },
      providesTags: ["LayoutMenu"],
    }),
  }),
});

export const { useGetMenuQuery } = menuApi;
