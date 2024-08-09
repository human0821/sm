import { apiSlice as api } from "../../index";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getListOfCounterparties: build.query<ApiV1CounterpartiesGetApiResponse, ApiV1CounterpartiesGetApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/counterparties`,
        params: { search: queryArg.search, page: queryArg.page, size: queryArg.size },
      }),
    }),
    addCounterparty: build.mutation<
      ApiV1CounterpartiesAddCounterpartyPostApiResponse,
      ApiV1CounterpartiesAddCounterpartyPostApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/counterparties/add_counterparty`,
        method: "POST",
        body: queryArg.counterpartyAddSchema,
      }),
    }),
    getTaxSystem: build.query<ApiV1CounterpartiesTaxSystemGetApiResponse, ApiV1CounterpartiesTaxSystemGetApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/counterparties/tax_system`,
        params: { counterpartyType: queryArg.counterpartyType },
      }),
    }),
    getCounterpartyDetail: build.query<
      ApiV1CounterpartiesCounterpartyIdGetApiResponse,
      ApiV1CounterpartiesCounterpartyIdGetApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/counterparties/${queryArg.counterpartyId}` }),
    }),
    activateDeactivateCounterparty: build.mutation<
      ApiV1CounterpartiesCounterpartyIdActivationPatchApiResponse,
      ApiV1CounterpartiesCounterpartyIdActivationPatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/counterparties/${queryArg.counterpartyId}/activation`,
        method: "PATCH",
        body: queryArg.counterPartyActiveSchema,
      }),
    }),
    forDeactivationCounterparty: build.mutation<
      ApiV1CounterpartiesCounterpartyIdForDeactivationPatchApiResponse,
      ApiV1CounterpartiesCounterpartyIdForDeactivationPatchApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/counterparties/${queryArg.counterpartyId}/for_deactivation`, method: "PATCH" }),
    }),
    listOfAccountsByCounterparty: build.query<
      ApiV1CounterpartiesCounterpartyIdAccountsGetApiResponse,
      ApiV1CounterpartiesCounterpartyIdAccountsGetApiArg
    >({
      query: (queryArg) => ({ url: `/api/v1/counterparties/${queryArg.counterpartyId}/accounts` }),
    }),
    selectMainAccount: build.mutation<
      ApiV1CounterpartiesCounterpartyIdAccountsSelectMainPatchApiResponse,
      ApiV1CounterpartiesCounterpartyIdAccountsSelectMainPatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/counterparties/${queryArg.counterpartyId}/accounts/select_main`,
        method: "PATCH",
        body: queryArg.accountMainFlagSchema,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as _counterpartyApi };
export type ApiV1CounterpartiesGetApiResponse = /** status 200 Successful Response */ PageCounterPartyListSchema;
export type ApiV1CounterpartiesGetApiArg = {
  search?: string | null;
  /** Page number */
  page?: number;
  /** Page size */
  size?: number;
};
export type ApiV1CounterpartiesAddCounterpartyPostApiResponse = /** status 200 Successful Response */ any;
export type ApiV1CounterpartiesAddCounterpartyPostApiArg = {
  counterpartyAddSchema: CounterpartyAddSchema;
};
export type ApiV1CounterpartiesTaxSystemGetApiResponse = /** status 200 Successful Response */ any[];
export type ApiV1CounterpartiesTaxSystemGetApiArg = {
  counterpartyType: string;
};
export type ApiV1CounterpartiesCounterpartyIdGetApiResponse =
  /** status 200 Successful Response */ CounterPartyDetailSchema;
export type ApiV1CounterpartiesCounterpartyIdGetApiArg = {
  counterpartyId: string;
};
export type ApiV1CounterpartiesCounterpartyIdActivationPatchApiResponse = /** status 200 Successful Response */ any;
export type ApiV1CounterpartiesCounterpartyIdActivationPatchApiArg = {
  counterpartyId: string;
  counterPartyActiveSchema: CounterPartyActiveSchema;
};
export type ApiV1CounterpartiesCounterpartyIdForDeactivationPatchApiResponse = /** status 200 Successful Response */ any;
export type ApiV1CounterpartiesCounterpartyIdForDeactivationPatchApiArg = {
  counterpartyId: string;
};
export type ApiV1CounterpartiesCounterpartyIdAccountsGetApiResponse =
  /** status 200 Successful Response */ (AccountSchema | null)[];
export type ApiV1CounterpartiesCounterpartyIdAccountsGetApiArg = {
  counterpartyId: string;
};
export type ApiV1CounterpartiesCounterpartyIdAccountsSelectMainPatchApiResponse = /** status 200 Successful Response */ any;
export type ApiV1CounterpartiesCounterpartyIdAccountsSelectMainPatchApiArg = {
  counterpartyId: string;
  accountMainFlagSchema: AccountMainFlagSchema;
};
export type CounterPartyListSchema = {
  isActive: boolean;
  email?: string | null;
  id: string;
  name: string;
  forDeactivation: boolean;
};
export type PageCounterPartyListSchema = {
  items: CounterPartyListSchema[];
  total: number | null;
  page: number | null;
  size: number | null;
  pages?: number | null;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type CounterPartyTypeEnum = "\u041E\u041E\u041E" | "\u0418\u041F";
export type TaxSystemEnum =
  | "\u0423\u0421\u041D \u0414\u043E\u0445\u043E\u0434\u044B (6% \u043F\u043E \u0420\u0424)"
  | "\u0423\u0421\u041D \u0414\u043E\u0445\u043E\u0434\u044B (1% \u043F\u043E \u0414\u041D\u0420 \u0438 \u041B\u041D\u0420)"
  | "\u0423\u0421\u041D \u0414\u043E\u0445\u043E\u0434\u044B-\u0420\u0430\u0441\u0445\u043E\u0434\u044B (15% \u043F\u043E \u0420\u0424)"
  | "\u0423\u0421\u041D \u0414\u043E\u0445\u043E\u0434\u044B-\u0420\u0430\u0441\u0445\u043E\u0434\u044B (5% \u043F\u043E \u0414\u041D\u0420 \u0438 \u041B\u041D\u0420)"
  | "\u0421\u0430\u043C\u043E\u0437\u0430\u043D\u044F\u0442\u043E\u0441\u0442\u044C (4%)"
  | "\u041E\u0431\u0449\u0430\u044F (20%)";
export type AccountCounterPartyAddSchema = {
  bik: string;
  checkingAccount: string;
  bank: string;
  corrAccount: string;
};
export type CounterpartyAddSchema = {
  counterpartyType: CounterPartyTypeEnum;
  inn: string;
  name: string;
  shortName: string;
  legalAddress: string;
  actualAddress: string;
  mailingAddress: string;
  kpp?: string | null;
  psrn?: string | null;
  ogrnip?: string | null;
  director?: string | null;
  chiefAccountant?: string | null;
  phone: string;
  email: string;
  documentFlow: string;
  taxSystem: TaxSystemEnum;
  accounts: AccountCounterPartyAddSchema[];
};
export type AccountSchema = {
  id: string;
  checkingAccount?: string | null;
  corrAccount?: string | null;
  bik?: string | null;
  bank?: string | null;
  deleted?: boolean | null;
  mainFlag: boolean;
};
export type PartnerCounterPartySchema = {
  id: string;
  companyName?: string | null;
  fullName?: string | null;
  shortenedName?: string | null;
};
export type CounterPartyDetailSchema = {
  email?: string | null;
  isActive: boolean;
  id: string;
  name: string;
  inn?: string | null;
  companyAddress?: string | null;
  kpp?: string | null;
  phone?: string | null;
  forDeactivation: boolean;
  accounts?: AccountSchema[] | null;
  partners?: PartnerCounterPartySchema[] | null;
};
export type CounterPartyActiveSchema = {
  isActive: boolean;
};
export type AccountMainFlagSchema = {
  id: string;
  mainFlag: boolean;
};
