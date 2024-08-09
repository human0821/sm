import ApiMicroservices from "@/app/consts/ApiMicroservices";
import { objectKeysToCamel } from "@/shared/utils/stringHelpers";

import BannersEndpoints from "./endpoints";
import { apiSlice } from "../index";

export const bannersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getBannersPublic: builder.query<DashboardBannerEntity[], void>({
      query: () => {
        return {
          url: `${ApiMicroservices.NOTIFICATIONS}${BannersEndpoints.PUBLIC}`,
          method: "GET",
        };
      },
      transformResponse(response: ApiBannersResponse.Public[]) {
        return response
          .filter((banner) => banner.active)
          .map((banner) => {
            return objectKeysToCamel(banner) as DashboardBannerEntity;
          });
      },
      providesTags: ["BannersPublic"],
    }),
  }),
});

export const { useGetBannersPublicQuery } = bannersApi;
