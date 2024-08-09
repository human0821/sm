import { objectKeysToCamel } from "@/shared/utils/stringHelpers";

import CounterpartiesEndpoints from "./endpoints";
import { apiSlice } from "../index";

export const сounterpartiesEndpointsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCounterparties: builder.query<Api.ResponseWithPagePaginate<CounterpartiesApi.CounterpartyItem>, string>({
      query: (searchParam) => {
        return {
          url: `${CounterpartiesEndpoints.ALL_COUNTERPARTIES}${searchParam}`,
          method: "GET",
        };
      },
      transformResponse(response: Api.ResponseWithPagePaginate<CounterpartiesApi.CounterpartyItem>) {
        return objectKeysToCamel(response) as Api.ResponseWithPagePaginate<CounterpartiesApi.CounterpartyItem>;
      },
      providesTags: ["СounterpartiesList"],
    }),
    getCounterparty: builder.query<CounterpartiesApi.CounterpartyDetail, string | number>({
      query: (id) => {
        return {
          url: CounterpartiesEndpoints.GET_COUNTERPARTY(id),
          method: "GET",
        };
      },
      transformResponse(response: CounterpartiesApi.CounterpartyDetail) {
        return objectKeysToCamel(response) as CounterpartiesApi.CounterpartyDetail;
      },
      providesTags: ["СounterpartyDetail"],
    }),
    changeActiveCounterparty: builder.mutation<
      CounterpartiesApi.CounterpartyItem | Api.ResponseError,
      { id: string | number; body: object }
    >({
      query: ({ id, body }) => {
        return {
          url: CounterpartiesEndpoints.CHANGE_ACTIVE(id),
          method: "PATCH",
          body,
        };
      },
      transformResponse(response: CounterpartiesApi.CounterpartyItem) {
        return response;
      },
    }),
    selectMainAccount: builder.mutation<
      CounterpartiesApi.CounterpartyAccount | Api.ResponseError,
      { id: string | number; body: object }
    >({
      query: ({ id, body }) => {
        return {
          url: CounterpartiesEndpoints.SELECT_MAIN_ACCOUNT(id),
          method: "PATCH",
          body,
        };
      },
      transformResponse(response: CounterpartiesApi.CounterpartyAccount) {
        return response;
      },
    }),
  }),
});

export const {
  useGetCounterpartiesQuery,
  useChangeActiveCounterpartyMutation,
  useGetCounterpartyQuery,
  useSelectMainAccountMutation,
} = сounterpartiesEndpointsApi;

export default сounterpartiesEndpointsApi;
