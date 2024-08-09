import { apiSlice as api } from "../../index";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postBannerAdmin: build.mutation<ApiV1BannersPostApiResponse, ApiV1BannersPostApiArg>({
      query: (queryArg) => ({ url: `administration/api/v1/banners`, method: "POST", body: queryArg.ApiV1BannersPost }),
    }),
    getBannersAdmin: build.query<ApiV1BannersGetApiResponse, ApiV1BannersGetApiArg>({
      query: (queryArg) => ({
        url: `administration/api/v1/banners`,
        params: {
          search: queryArg.search,
          created: queryArg.created,
          active: queryArg.active,
          page: queryArg.page,
          size: queryArg.size,
        },
      }),
    }),
    getPublicBannersAdmin: build.query<ApiV1BannersPublicGetApiResponse, ApiV1BannersPublicGetApiArg>({
      query: () => ({ url: `administration/api/v1/banners/public` }),
    }),
    upPositionAdmin: build.mutation<
      ApiV1BannersBannerIdPositionUpPatchApiResponse,
      ApiV1BannersBannerIdPositionUpPatchApiArg
    >({
      query: (queryArg) => ({ url: `administration/api/v1/banners/${queryArg.bannerId}/position/up`, method: "PATCH" }),
    }),
    downPositionAdmin: build.mutation<
      ApiV1BannersBannerIdPositionDownPatchApiResponse,
      ApiV1BannersBannerIdPositionDownPatchApiArg
    >({
      query: (queryArg) => ({ url: `administration/api/v1/banners/${queryArg.bannerId}/position/down`, method: "PATCH" }),
    }),
    getBannerAdmin: build.query<ApiV1BannersBannerIdGetApiResponse, ApiV1BannersBannerIdGetApiArg>({
      query: (queryArg) => ({ url: `administration/api/v1/banners/${queryArg.bannerId}` }),
    }),
    putBannerAdmin: build.mutation<ApiV1BannersBannerIdPutApiResponse, ApiV1BannersBannerIdPutApiArg>({
      query: (queryArg) => ({
        url: `administration/api/v1/banners/${queryArg.bannerId}`,
        method: "PUT",
        body: queryArg.ApiV1BannersBannerIdPut,
      }),
    }),
    deleteBannerAdmin: build.mutation<ApiV1BannersBannerIdDeleteApiResponse, ApiV1BannersBannerIdDeleteApiArg>({
      query: (queryArg) => ({ url: `administration/api/v1/banners/${queryArg.bannerId}`, method: "DELETE" }),
    }),
    bannerActivationAdmin: build.mutation<
      ApiV1BannersBannerIdActivationPatchApiResponse,
      ApiV1BannersBannerIdActivationPatchApiArg
    >({
      query: (queryArg) => ({
        url: `administration/api/v1/banners/${queryArg.bannerId}/activation`,
        method: "PATCH",
        body: queryArg.bannerActivationSchema,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as _bannersAdminApi };
export type ApiV1BannersPostApiResponse = /** status 200 Successful Response */ BannerSchema;
export type ApiV1BannersPostApiArg = {
  ApiV1BannersPost: ApiV1BannersPost;
};
export type ApiV1BannersGetApiResponse = /** status 200 Successful Response */ PageBannerSchema;
export type ApiV1BannersGetApiArg = {
  search?: string | null;
  created?: string | null;
  active?: boolean | null;
  /** Page number */
  page?: number;
  /** Page size */
  size?: number;
};
export type ApiV1BannersPublicGetApiResponse = /** status 200 Successful Response */ BannerPublicSchema[];
export type ApiV1BannersPublicGetApiArg = void;
export type ApiV1BannersBannerIdPositionUpPatchApiResponse = /** status 200 Successful Response */ any;
export type ApiV1BannersBannerIdPositionUpPatchApiArg = {
  bannerId: number;
};
export type ApiV1BannersBannerIdPositionDownPatchApiResponse = /** status 200 Successful Response */ any;
export type ApiV1BannersBannerIdPositionDownPatchApiArg = {
  bannerId: number;
};
export type ApiV1BannersBannerIdGetApiResponse = /** status 200 Successful Response */ BannerSchema;
export type ApiV1BannersBannerIdGetApiArg = {
  bannerId: number;
};
export type ApiV1BannersBannerIdPutApiResponse = /** status 200 Successful Response */ BannerSchema;
export type ApiV1BannersBannerIdPutApiArg = {
  bannerId: number;
  ApiV1BannersBannerIdPut: ApiV1BannersBannerIdPut;
};
export type ApiV1BannersBannerIdDeleteApiResponse = /** status 204 Successful Response */ void;
export type ApiV1BannersBannerIdDeleteApiArg = {
  bannerId: number;
};
export type ApiV1BannersBannerIdActivationPatchApiResponse = /** status 200 Successful Response */ any;
export type ApiV1BannersBannerIdActivationPatchApiArg = {
  bannerId: number;
  bannerActivationSchema: BannerActivationSchema;
};
export type BannerSchema = {
  name: string;
  link: string;
  active: boolean;
  id: number;
  positionNumber: number;
  created: string;
  file: string;
  videoFlag: boolean;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type ApiV1BannersPost = {
  file: Blob;
  name: string;
  link: string;
  active: boolean;
};
export type PageBannerSchema = {
  items: BannerSchema[];
  total: number | null;
  page: number | null;
  size: number | null;
  pages?: number | null;
};
export type BannerPublicSchema = {
  id: number;
  name: string;
  link: string;
  active: boolean;
  positionNumber: number;
  file: string;
  videoFlag: boolean;
};
export type ApiV1BannersBannerIdPut = {
  file?: Blob | null;
  name: string;
  link: string;
  active: boolean;
};
export type BannerActivationSchema = {
  active: boolean;
};
