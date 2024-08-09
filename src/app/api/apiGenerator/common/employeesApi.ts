import { apiSlice as api } from "../../index";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getEmployees: build.query<ApiV1EmployeesGetApiResponse, ApiV1EmployeesGetApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/employees`,
        params: { search: queryArg.search, roles: queryArg.roles, page: queryArg.page, size: queryArg.size },
      }),
    }),
    createEmployee: build.mutation<ApiV1EmployeesPostApiResponse, ApiV1EmployeesPostApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/employees`,
        method: "POST",
        body: queryArg.ApiV1EmployeesPost,
      }),
    }),
    getEmployeeRoles: build.query<ApiV1EmployeesRolesGetApiResponse, ApiV1EmployeesRolesGetApiArg>({
      query: () => ({ url: `/api/v1/employees/roles` }),
    }),
    activateDeactivateEmployee: build.mutation<
      ApiV1EmployeesEmployeeIdPatchApiResponse,
      ApiV1EmployeesEmployeeIdPatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/employees/${queryArg.employeeId}`,
        method: "PATCH",
        body: queryArg.employeeActiveSchema,
      }),
    }),
    putEmployee: build.mutation<ApiV1EmployeesEmployeeIdPutApiResponse, ApiV1EmployeesEmployeeIdPutApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/employees/${queryArg.employeeId}`,
        method: "PUT",
        body: queryArg.ApiV1EmployeesEmployeeIdPut,
      }),
    }),
    getEmployee: build.query<ApiV1EmployeesEmployeeIdGetApiResponse, ApiV1EmployeesEmployeeIdGetApiArg>({
      query: (queryArg) => ({ url: `/api/v1/employees/${queryArg.employeeId}` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as _employeesApi };
export type ApiV1EmployeesGetApiResponse = /** status 200 Successful Response */ PageEmployeeListSchema;
export type ApiV1EmployeesGetApiArg = {
  search?: string | null;
  roles?: string | null;
  /** Page number */
  page?: number;
  /** Page size */
  size?: number;
};
export type ApiV1EmployeesPostApiResponse = /** status 200 Successful Response */ EmployeeSchema;
export type ApiV1EmployeesPostApiArg = {
  ApiV1EmployeesPost: ApiV1EmployeesPost;
};
export type ApiV1EmployeesRolesGetApiResponse = /** status 200 Successful Response */ EmployeeRoleSchema[];
export type ApiV1EmployeesRolesGetApiArg = void;
export type ApiV1EmployeesEmployeeIdPatchApiResponse = /** status 206 Successful Response */ any;
export type ApiV1EmployeesEmployeeIdPatchApiArg = {
  employeeId: string;
  employeeActiveSchema: EmployeeActiveSchema;
};
export type ApiV1EmployeesEmployeeIdPutApiResponse = /** status 200 Successful Response */ EmployeeSchema;
export type ApiV1EmployeesEmployeeIdPutApiArg = {
  employeeId: string;
  ApiV1EmployeesEmployeeIdPut: ApiV1EmployeesEmployeeIdPut;
};
export type ApiV1EmployeesEmployeeIdGetApiResponse = /** status 200 Successful Response */ EmployeeSmPartnerSchema;
export type ApiV1EmployeesEmployeeIdGetApiArg = {
  employeeId: string;
};
export type RoleSchema = {
  id: number;
  name: string;
};
export type EmployeeListSchema = {
  email: string;
  id: string;
  fullName?: string | null;
  roles?: RoleSchema[] | null;
  avatar?: string | null;
  deleted: boolean;
};
export type PageEmployeeListSchema = {
  items: EmployeeListSchema[];
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
export type EmployeeNestedWithoutUserSchema = {
  id: string;
  bonusFlag: boolean;
  priceFlag: boolean;
};
export type CaseSegmentShortSchema = {
  id: string;
  name: string;
};
export type UserCaseShortSchema = {
  id: number;
  caseSegment?: CaseSegmentShortSchema | null;
};
export type EmployeeSchema = {
  email: string;
  id: string;
  phoneNumber?: string | null;
  fullName?: string | null;
  avatar?: string | null;
  employee?: EmployeeNestedWithoutUserSchema | null;
  userCase?: UserCaseShortSchema | null;
  roles?: RoleSchema[] | null;
};
export type ApiV1EmployeesPost = {
  roles: string;
  avatar?: Blob;
  phoneNumber?: string | null;
  email: string;
  password: string;
  fullName: string;
  bonusFlag?: boolean | null;
  priceFlag?: boolean | null;
  caseSegmentId?: string | null;
};
export type EmployeeRoleSchema = {
  name: string;
  id: number;
};
export type EmployeeActiveSchema = {
  password?: string | null;
  deleted?: boolean | null;
};
export type ApiV1EmployeesEmployeeIdPut = {
  roles: string;
  avatar?: Blob;
  phoneNumber?: string | null;
  fullName: string;
  bonusFlag?: boolean | null;
  priceFlag?: boolean | null;
  caseSegmentId?: string | null;
  password?: string | null;
};
export type EmployeeSmPartnerSchema = {
  id: string;
  avatar?: string | null;
  fullName?: string | null;
  phoneNumber: string | null;
  email: string;
  roles: RoleSchema[];
  deleted: boolean;
  employee?: EmployeeNestedWithoutUserSchema | null;
};
