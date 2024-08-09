import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import ContentTypes from "@/shared/consts/contentTypes";
import { Token } from "@/shared/utils/token";

import { DadataEndpoints } from "./endpoints";

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_DADATA_URL,
  prepareHeaders: (headers) =>
    Token.setAuthHeader({ headers, accessToken: import.meta.env.VITE_DADATA_TOKEN, typeToken: "Token" }),
});

export const apiDadataSlice = createApi({
  reducerPath: "dadataApi",
  baseQuery,
  endpoints: () => ({}),
});

const headers = {
  "Content-Type": ContentTypes.APPLICATION_JSON,
  Accept: ContentTypes.APPLICATION_JSON,
};

export const dadataEndpointsApi = apiDadataSlice.injectEndpoints({
  endpoints: (builder) => ({
    getDataOnInn: builder.query<ApiDadataInnResponse["suggestions"], ApiDadataInnRequest>({
      query: (body: ApiDadataInnRequest) => {
        return {
          url: DadataEndpoints.GET_ON_INN,
          method: "POST",
          headers,
          body,
        };
      },
      transformResponse: (response: ApiDadataInnResponse) => response.suggestions,
    }),
    getDataOnBik: builder.query<ApiDadataBikResponse["suggestions"], ApiDadataBikRequest>({
      query: (body: ApiDadataBikRequest) => {
        return {
          url: DadataEndpoints.GET_ON_BIK,
          method: "POST",
          headers,
          body,
        };
      },
      transformResponse: (response: ApiDadataBikResponse) => response.suggestions,
    }),
  }),
});

export const { useGetDataOnInnQuery, useGetDataOnBikQuery } = dadataEndpointsApi;
