import { objectKeysToCamel } from "@/shared/utils/stringHelpers";

import CasesEndpoints from "./endpoints";
import { apiSlice } from "../index";

export const CasesEndpointsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getCases: builder.query<CasesApi.CasesResponse | null, void>({
      query: () => ({ url: CasesEndpoints.CASES, method: "GET" }),
      transformResponse: (response: CasesApi.CasesResponse | null) => {
        return response ? (objectKeysToCamel(response) as CasesApi.CasesResponse) : null;
      },
      providesTags: ["CasesDetail"],
    }),
  }),
});

export const { useGetCasesQuery } = CasesEndpointsApi;

export default CasesEndpointsApi;
