import { objectKeysToCamel } from "@/shared/utils/stringHelpers";

import PartnersEndpoints from "./endpoints";
import { apiSlice } from "../index";

export const partnersApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getMainInfo: builder.query<LayoutMenuFooterEntity, void>({
      query: () => {
        return {
          url: PartnersEndpoints.MAIN_INFO,
          method: "GET",
        };
      },
      transformResponse(response: ApiPartnersResponse.GetMainInfo) {
        return objectKeysToCamel(response) as LayoutMenuFooterEntity;
      },
      providesTags: ["MainInfoCompany"],
    }),
    connectToManager: builder.mutation<void, ApiPartnersRequest.ConnectToManager>({
      query: (body) => {
        return {
          url: PartnersEndpoints.MANAGER,
          method: "POST",
          body,
        };
      },
    }),
    UpdatePartnerInfo: builder.mutation<void, ApiPartnersRequest.BasicInformation>({
      query: (body) => {
        return {
          url: PartnersEndpoints.UPDATE_PARTNER_INFO,
          method: "PATCH",
          body,
        };
      },
      invalidatesTags: ["MainInfoCompany"],
    }),

    uploadDesignImages: builder.mutation<void, { partnerId: string; data: ApiPartnersRequest.UploadDesignImages }>({
      query: (body) => {
        const FD = new FormData();

        Object.entries(body.data).forEach(([key, value]) => {
          value !== null && FD.append(key, value);
        });
        return {
          url: PartnersEndpoints.DESIGN_SCHEMA,
          method: "PATCH",
          headers: {},
          body: FD,
        };
      },
      invalidatesTags: ["DesignSiteSchema"],
    }),

    getDesignSchema: builder.query<ApiPartnersResponse.DesignSchema & { id: number }, string>({
      query: () => {
        return {
          url: PartnersEndpoints.DESIGN_SCHEMA,
        };
      },
      providesTags: ["DesignSiteSchema"],
    }),

    getAllColorsSchemes: builder.query<string[], void>({
      query: () => {
        return {
          url: PartnersEndpoints.ALL_COLORS,
        };
      },
    }),

    getPartnersMarkup: builder.query<ApiPartnersResponse.PartnerMarkup, void>({
      query: () => {
        return {
          url: PartnersEndpoints.MARKUP,
        };
      },
    }),
    setPartnersMarkup: builder.mutation<void, ApiPartnersRequest.PartnerMarkup>({
      query: (body) => ({
        url: PartnersEndpoints.MARKUP,
        method: "POST",
        body,
      }),
    }),
    getPartnersDiscounts: builder.query<ApiPartnersResponse.PartnerDiscount[], void>({
      query: () => ({
        url: PartnersEndpoints.DISCOUNT,
        method: "GET",
      }),
    }),
    setPartnersDiscounts: builder.mutation<void, ApiPartnersRequest.PartnerDiscount>({
      query: (body) => ({
        url: PartnersEndpoints.DISCOUNT,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useGetMainInfoQuery,
  useConnectToManagerMutation,
  useUpdatePartnerInfoMutation,
  useUploadDesignImagesMutation,
  useGetDesignSchemaQuery,
  useGetPartnersDiscountsQuery,
  useGetPartnersMarkupQuery,
  useSetPartnersDiscountsMutation,
  useSetPartnersMarkupMutation,
  useGetAllColorsSchemesQuery,
} = partnersApi;
