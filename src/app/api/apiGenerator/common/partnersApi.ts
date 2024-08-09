import { apiSlice as api } from "../../index";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getListOfAddresses: build.query<ApiV1PartnersAddressesGetApiResponse, ApiV1PartnersAddressesGetApiArg>({
      query: () => ({ url: `/api/v1/partners/addresses` }),
    }),
    putAddress: build.mutation<ApiV1PartnersAddressesPutApiResponse, ApiV1PartnersAddressesPutApiArg>({
      query: (queryArg) => ({ url: `/api/v1/partners/addresses`, method: "PUT", body: queryArg.partnerAddressSchema }),
    }),
    postAddress: build.mutation<ApiV1PartnersAddressesPostApiResponse, ApiV1PartnersAddressesPostApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/partners/addresses`,
        method: "POST",
        body: queryArg.partnerAddressCreateSchema,
      }),
    }),
    getAddress: build.query<ApiV1PartnersAddressesAddressIdGetApiResponse, ApiV1PartnersAddressesAddressIdGetApiArg>({
      query: (queryArg) => ({ url: `/api/v1/partners/addresses/${queryArg.addressId}` }),
    }),
    deleteAddress: build.mutation<
      ApiV1PartnersAddressesAddressIdDeleteApiResponse,
      ApiV1PartnersAddressesAddressIdDeleteApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/partners/addresses/${queryArg.addressId}`, method: "DELETE" }),
    }),
    getManager: build.query<ApiV1PartnersManagerGetApiResponse, ApiV1PartnersManagerGetApiArg>({
      query: () => ({ url: `/api/v1/partners/manager` }),
    }),
    contactWithManager: build.mutation<ApiV1PartnersManagerPostApiResponse, ApiV1PartnersManagerPostApiArg>({
      query: (queryArg) => ({ url: `/api/v1/partners/manager`, method: "POST", body: queryArg.contactWithManagerSchema }),
    }),
    partnerDetail: build.query<ApiV1PartnersPartnerIdGetApiResponse, ApiV1PartnersPartnerIdGetApiArg>({
      query: (queryArg) => ({ url: `/api/v1/partners/${queryArg.partnerId}` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as _partnersApi };
export type ApiV1PartnersAddressesGetApiResponse = /** status 200 Successful Response */ PartnerAddressSchema[];
export type ApiV1PartnersAddressesGetApiArg = void;
export type ApiV1PartnersAddressesPutApiResponse = /** status 200 Successful Response */ PartnerAddressSchema;
export type ApiV1PartnersAddressesPutApiArg = {
  partnerAddressSchema: PartnerAddressSchema;
};
export type ApiV1PartnersAddressesPostApiResponse = /** status 200 Successful Response */ PartnerAddressSchema;
export type ApiV1PartnersAddressesPostApiArg = {
  partnerAddressCreateSchema: PartnerAddressCreateSchema;
};
export type ApiV1PartnersAddressesAddressIdGetApiResponse = /** status 200 Successful Response */ PartnerAddress;
export type ApiV1PartnersAddressesAddressIdGetApiArg = {
  addressId: string;
};
export type ApiV1PartnersAddressesAddressIdDeleteApiResponse = /** status 204 Successful Response */ void;
export type ApiV1PartnersAddressesAddressIdDeleteApiArg = {
  addressId: string;
};
export type ApiV1PartnersManagerGetApiResponse = /** status 200 Successful Response */ ManagerSchema | null;
export type ApiV1PartnersManagerGetApiArg = void;
export type ApiV1PartnersManagerPostApiResponse = /** status 200 Successful Response */ any;
export type ApiV1PartnersManagerPostApiArg = {
  contactWithManagerSchema: ContactWithManagerSchema;
};
export type ApiV1PartnersPartnerIdGetApiResponse = /** status 200 Successful Response */ PartnerSchema;
export type ApiV1PartnersPartnerIdGetApiArg = {
  partnerId: string;
};
export type PartnerAddressSchema = {
  address: string;
  id: string;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type PartnerAddressCreateSchema = {
  address: string;
};
export type PartnerAddress = {
  id?: string;
  address: string | null;
  createdAt: string;
  userId?: string | null;
};
export type ManagerSchema = {
  email: string;
  avatar?: string | null;
  fullName: string;
  phoneNumber?: string | null;
  id: string;
};
export type ContactWithManagerSchema = {
  email: string;
  text: string;
};
export type CounterpartySchema = {
  email?: string | null;
  id: string;
  name: string;
};
export type PartnerSchema = {
  email: string;
  id: string;
  phoneNumber?: string | null;
  companyName?: string | null;
  position?: string | null;
  partnerAddresses?: PartnerAddressSchema[] | null;
  manager?: ManagerSchema | null;
  counterparties?: CounterpartySchema[] | null;
};
