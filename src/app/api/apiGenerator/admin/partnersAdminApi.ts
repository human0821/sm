import { apiSlice as api } from "../../index";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSiteColorSchemaAdmin: build.query<
      ApiV1PartnersSiteDesignColorsGetApiResponse,
      ApiV1PartnersSiteDesignColorsGetApiArg
    >({
      query: () => ({ url: `administration/api/v1/partners/site_design/colors` }),
    }),
    getSiteDesignAdmin: build.query<ApiV1PartnersSiteDesignGetApiResponse, ApiV1PartnersSiteDesignGetApiArg>({
      query: () => ({ url: `administration/api/v1/partners/site_design` }),
    }),
    patchSiteDesignAdmin: build.mutation<ApiV1PartnersSiteDesignPatchApiResponse, ApiV1PartnersSiteDesignPatchApiArg>({
      query: (queryArg) => ({ url: `administration/api/v1/partners/site_design`, method: "PATCH", body: queryArg.body }),
    }),
    getMainInfoAdmin: build.query<ApiV1PartnersMainInfoGetApiResponse, ApiV1PartnersMainInfoGetApiArg>({
      query: () => ({ url: `administration/api/v1/partners/main_info` }),
    }),
    patchMainInfoAdmin: build.mutation<ApiV1PartnersMainInfoPatchApiResponse, ApiV1PartnersMainInfoPatchApiArg>({
      query: (queryArg) => ({
        url: `administration/api/v1/partners/main_info`,
        method: "PATCH",
        body: queryArg.partnerMainInfoUpdateSchema,
      }),
    }),
    getWidgetsInfoAdmin: build.query<ApiV1PartnersWidgetsGetApiResponse, ApiV1PartnersWidgetsGetApiArg>({
      query: () => ({ url: `administration/api/v1/partners/widgets` }),
    }),
    patchWidgetsInfoAdmin: build.mutation<ApiV1PartnersWidgetsPatchApiResponse, ApiV1PartnersWidgetsPatchApiArg>({
      query: (queryArg) => ({ url: `administration/api/v1/partners/widgets`, method: "PATCH", body: queryArg.payload }),
    }),
    getWidgetsPublicAdmin: build.query<ApiV1PartnersWidgetsMainGetApiResponse, ApiV1PartnersWidgetsMainGetApiArg>({
      query: () => ({ url: `administration/api/v1/partners/widgets/main` }),
    }),
    getListOfPartnersAdmin: build.query<ApiV1PartnersGetApiResponse, ApiV1PartnersGetApiArg>({
      query: (queryArg) => ({
        url: `administration/api/v1/partners`,
        params: { search: queryArg.search, case: queryArg["case"], page: queryArg.page, size: queryArg.size },
      }),
    }),
    getMarkupAdmin: build.query<ApiV1PartnersMarkupGetApiResponse, ApiV1PartnersMarkupGetApiArg>({
      query: () => ({ url: `administration/api/v1/partners/markup` }),
    }),
    putOrCreateMarkupAdmin: build.mutation<ApiV1PartnersMarkupPostApiResponse, ApiV1PartnersMarkupPostApiArg>({
      query: (queryArg) => ({
        url: `administration/api/v1/partners/markup`,
        method: "POST",
        body: queryArg.userMarkupSchema,
      }),
    }),
    getDiscountAdmin: build.query<ApiV1PartnersDiscountGetApiResponse, ApiV1PartnersDiscountGetApiArg>({
      query: () => ({ url: `administration/api/v1/partners/discount` }),
    }),
    putOrCreateDiscountAdmin: build.mutation<ApiV1PartnersDiscountPostApiResponse, ApiV1PartnersDiscountPostApiArg>({
      query: (queryArg) => ({ url: `administration/api/v1/partners/discount`, method: "POST", body: queryArg.payload }),
    }),
    postOrPutSubsectionMarkupAdmin: build.mutation<
      ApiV1PartnersMarkupSubsectionMarkupPostApiResponse,
      ApiV1PartnersMarkupSubsectionMarkupPostApiArg
    >({
      query: (queryArg) => ({
        url: `administration/api/v1/partners/markup/subsection_markup`,
        method: "POST",
        body: queryArg.payload,
      }),
    }),
    getSubsectionMarkupAdmin: build.query<
      ApiV1PartnersMarkupSubsectionMarkupGetApiResponse,
      ApiV1PartnersMarkupSubsectionMarkupGetApiArg
    >({
      query: (queryArg) => ({
        url: `administration/api/v1/partners/markup/subsection_markup`,
        params: { search: queryArg.search, markup: queryArg.markup },
      }),
    }),
    getBrandsMarkupAdmin: build.query<
      ApiV1PartnersMarkupBrandsMarkupGetApiResponse,
      ApiV1PartnersMarkupBrandsMarkupGetApiArg
    >({
      query: (queryArg) => ({
        url: `administration/api/v1/partners/markup/brands_markup`,
        params: { search: queryArg.search, markup: queryArg.markup },
      }),
    }),
    postOrPutBrandsMarkupAdmin: build.mutation<
      ApiV1PartnersMarkupBrandsMarkupPostApiResponse,
      ApiV1PartnersMarkupBrandsMarkupPostApiArg
    >({
      query: (queryArg) => ({
        url: `administration/api/v1/partners/markup/brands_markup`,
        method: "POST",
        body: queryArg.payload,
      }),
    }),
    getListOfAvailableMarkupsAdmin: build.query<ApiV1PartnersMarkupAddedGetApiResponse, ApiV1PartnersMarkupAddedGetApiArg>({
      query: () => ({ url: `administration/api/v1/partners/markup/added` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as _partnersAdminApi };
export type ApiV1PartnersSiteDesignColorsGetApiResponse = /** status 200 Colors dictionary */ object;
export type ApiV1PartnersSiteDesignColorsGetApiArg = void;
export type ApiV1PartnersSiteDesignGetApiResponse = /** status 200 Successful Response */ PartnerSiteDesignSchema;
export type ApiV1PartnersSiteDesignGetApiArg = void;
export type ApiV1PartnersSiteDesignPatchApiResponse = /** status 200 Successful Response */ PartnerSiteDesignSchema;
export type ApiV1PartnersSiteDesignPatchApiArg = {
  body: ApiV1PartnersSiteDesignPatch;
};
export type ApiV1PartnersMainInfoGetApiResponse = /** status 200 Successful Response */ PartnerMainInfoSchema;
export type ApiV1PartnersMainInfoGetApiArg = void;
export type ApiV1PartnersMainInfoPatchApiResponse = /** status 200 Successful Response */ PartnerMainInfoSchema;
export type ApiV1PartnersMainInfoPatchApiArg = {
  partnerMainInfoUpdateSchema: PartnerMainInfoUpdateSchema;
};
export type ApiV1PartnersWidgetsGetApiResponse = /** status 200 Successful Response */ WidgetListSchema[];
export type ApiV1PartnersWidgetsGetApiArg = void;
export type ApiV1PartnersWidgetsPatchApiResponse = /** status 200 Successful Response */ any;
export type ApiV1PartnersWidgetsPatchApiArg = {
  payload: PatchWidgetInfoSchema[];
};
export type ApiV1PartnersWidgetsMainGetApiResponse = /** status 200 Successful Response */ WidgetMainSchema[];
export type ApiV1PartnersWidgetsMainGetApiArg = void;
export type ApiV1PartnersGetApiResponse = /** status 200 Successful Response */ object;
export type ApiV1PartnersGetApiArg = {
  search?: string | null;
  case?: string | null;
  page?: number;
  size?: number;
};
export type ApiV1PartnersMarkupGetApiResponse = /** status 200 Successful Response */ UserMarkupSchema | null;
export type ApiV1PartnersMarkupGetApiArg = void;
export type ApiV1PartnersMarkupPostApiResponse = /** status 200 Successful Response */ UserMarkupSchema;
export type ApiV1PartnersMarkupPostApiArg = {
  userMarkupSchema: UserMarkupSchema;
};
export type ApiV1PartnersDiscountGetApiResponse = /** status 200 Successful Response */ SellerListSchema[];
export type ApiV1PartnersDiscountGetApiArg = void;
export type ApiV1PartnersDiscountPostApiResponse = /** status 200 Successful Response */ SellerDiscountViewSchema[];
export type ApiV1PartnersDiscountPostApiArg = {
  payload: SellerDiscountSchema[];
};
export type ApiV1PartnersMarkupSubsectionMarkupPostApiResponse = /** status 200 Successful Response */ any;
export type ApiV1PartnersMarkupSubsectionMarkupPostApiArg = {
  payload: PartnerSubsectionMarkupSchema[];
};
export type ApiV1PartnersMarkupSubsectionMarkupGetApiResponse =
  /** status 200 Item requested by ID */ (SectionMarkupSchema | null)[];
export type ApiV1PartnersMarkupSubsectionMarkupGetApiArg = {
  search?: string | null;
  markup?: string | null;
};
export type ApiV1PartnersMarkupBrandsMarkupGetApiResponse =
  /** status 200 Item requested by ID */ (BrandMarkupSchema | null)[];
export type ApiV1PartnersMarkupBrandsMarkupGetApiArg = {
  search?: string | null;
  markup?: string | null;
};
export type ApiV1PartnersMarkupBrandsMarkupPostApiResponse = /** status 200 Successful Response */ any;
export type ApiV1PartnersMarkupBrandsMarkupPostApiArg = {
  payload: PartnerBrandsMarkupSchema[];
};
export type ApiV1PartnersMarkupAddedGetApiResponse = /** status 200 Successful Response */ number[];
export type ApiV1PartnersMarkupAddedGetApiArg = void;
export type ColorSchemaEnum = "#202020" | "#0E4D62" | "#5E35B7" | "#CDCDCD" | "#E96262" | "#356DDB";
export type PartnerSiteDesignSchema = {
  id: number;
  colorSchema?: ColorSchemaEnum | null;
  logo?: string | null;
  header?: string | null;
  side?: string | null;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type ApiV1PartnersSiteDesignPatch = {
  colorSchema?: string;
  logo?: Blob | boolean | null;
  header?: Blob | boolean | null;
  side?: Blob | boolean | null;
};
export type PartnerMainInfoSchema = {
  name?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  description?: string | null;
  vkLink?: string | null;
  telegramLink?: string | null;
  okLink?: string | null;
  id: number;
};
export type PartnerMainInfoUpdateSchema = {
  name?: string | null;
  phoneNumber?: string | null;
  email?: string | null;
  description?: string | null;
  vkLink?: string | null;
  telegramLink?: string | null;
  okLink?: string | null;
};
export type RoleWidgetListSchema = {
  id: number;
  name: string;
  chosen?: boolean | null;
};
export type WidgetListSchema = {
  id: number;
  name: string;
  roles: RoleWidgetListSchema[];
};
export type ChosenRole = {
  chosen: boolean;
  roleId: number;
};
export type PatchWidgetInfoSchema = {
  menuId: number;
  roles: ChosenRole[];
};
export type WidgetMainSchema = {
  id: number;
  name: string;
};
export type UserMarkupSchema = {
  markup?: number | null;
};
export type SellerListSchema = {
  id: string;
  avatar?: string | null;
  email: string;
  shortenedName?: string | null;
  discount?: number | null;
};
export type SellerDiscountViewSchema = {
  sellerId: string;
  discount: number;
  id: number;
};
export type SellerDiscountSchema = {
  sellerId: string;
  discount: number;
};
export type PartnerSubsectionMarkupSchema = {
  subsectionId: string;
  markup: number;
};
export type SubSectionMarkupSchema = {
  id: string;
  name: string;
  markup?: number | null;
};
export type SectionMarkupSchema = {
  id: string;
  name: string;
  subSections?: SubSectionMarkupSchema[] | null;
};
export type BrandMarkupSchema = {
  id: string;
  name: string;
  subsections?: (SubSectionMarkupSchema | null)[] | null;
};
export type PartnerBrandsMarkupSchema = {
  subsectionId?: string | null;
  brandId: string;
  markup: number;
};
