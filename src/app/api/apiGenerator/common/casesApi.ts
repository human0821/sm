import { apiSlice as api } from "../../index";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getUsersCase: build.query<ApiV1CasesCurrentUserGetApiResponse, ApiV1CasesCurrentUserGetApiArg>({
      query: () => ({ url: `/api/v1/cases/current_user` }),
    }),
    putPriveleges: build.mutation<ApiV1CasesCaseIdPrivilegesPatchApiResponse, ApiV1CasesCaseIdPrivilegesPatchApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/cases/${queryArg.caseId}/privileges`,
        method: "PATCH",
        body: queryArg.caseSegmentPrivileges,
      }),
    }),
    getPrivileges: build.query<ApiV1CasesCaseIdPrivilegesGetApiResponse, ApiV1CasesCaseIdPrivilegesGetApiArg>({
      query: (queryArg) => ({ url: `/api/v1/cases/${queryArg.caseId}/privileges` }),
    }),
    getCases: build.query<ApiV1CasesGetApiResponse, ApiV1CasesGetApiArg>({
      query: () => ({ url: `/api/v1/cases` }),
    }),
    getShortCases: build.query<ApiV1CasesShortGetApiResponse, ApiV1CasesShortGetApiArg>({
      query: () => ({ url: `/api/v1/cases/short` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as _casesApi };
export type ApiV1CasesCurrentUserGetApiResponse =
  /** status 200 Successful Response */ UserCaseNestedIdCurrentSchema | null;
export type ApiV1CasesCurrentUserGetApiArg = void;
export type ApiV1CasesCaseIdPrivilegesPatchApiResponse = /** status 200 Successful Response */ UserCaseSegmentBaseSchema;
export type ApiV1CasesCaseIdPrivilegesPatchApiArg = {
  caseId: string;
  caseSegmentPrivileges: CaseSegmentPrivileges;
};
export type ApiV1CasesCaseIdPrivilegesGetApiResponse =
  /** status 200 Successful Response */ CaseSegmentPrivilegesViewSchema;
export type ApiV1CasesCaseIdPrivilegesGetApiArg = {
  caseId: string;
};
export type ApiV1CasesGetApiResponse = /** status 200 Successful Response */ CaseSegmentListSchema[];
export type ApiV1CasesGetApiArg = void;
export type ApiV1CasesShortGetApiResponse = /** status 200 Successful Response */ CaseSegmentShortSchema[];
export type ApiV1CasesShortGetApiArg = void;
export type UserCaseNameSchema = {
  name: string;
};
export type UserCaseSegmentSchema = {
  privileges?: any | null;
  id: string;
  name?: string | null;
  analyzedPeriodStart?: string | null;
  analyzedPeriodEnd?: string | null;
  amountGt?: number | null;
  amountLt?: number | null;
  children?: UserCaseNameSchema | null;
};
export type HistoryCaseSchema = {
  id: number;
  dateChange: string;
  name?: string | null;
};
export type UserCaseNestedIdCurrentSchema = {
  paidAmount?: number | null;
  dateImmunity?: string | null;
  caseSegment?: UserCaseSegmentSchema | null;
  id: number;
  historyCases?: HistoryCaseSchema[];
};
export type UserCaseSegmentBaseSchema = {
  privileges?: any | null;
  id: string;
  name?: string | null;
  analyzedPeriodStart?: string | null;
  analyzedPeriodEnd?: string | null;
  amountGt?: number | null;
  amountLt?: number | null;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type CaseSegmentPrivileges = {
  privileges?: string | null;
};
export type CaseSegmentPrivilegesViewSchema = {
  privileges?: any | null;
  id: string;
  name: string;
};
export type CaseSegmentListSchema = {
  privileges?: any | null;
  id: string;
  name?: string | null;
  periodStart?: string | null;
  periodEnd?: string | null;
  analyzedPeriodStart?: string | null;
  analyzedPeriodEnd?: string | null;
  amountLt?: number | null;
  amountGt?: number | null;
  level?: number | null;
};
export type CaseSegmentShortSchema = {
  id: string;
  name: string;
};
