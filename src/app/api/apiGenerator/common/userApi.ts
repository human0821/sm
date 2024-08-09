import { apiSlice as api } from "../../index";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    aboutMe: build.query<ApiV1UsersMeGetApiResponse, ApiV1UsersMeGetApiArg>({
      query: () => ({ url: `/api/v1/users/me` }),
    }),
    profile: build.query<ApiV1UsersProfileGetApiResponse, ApiV1UsersProfileGetApiArg>({
      query: () => ({ url: `/api/v1/users/profile` }),
    }),
    saveLastLink: build.mutation<ApiV1UsersSaveLastLinkPatchApiResponse, ApiV1UsersSaveLastLinkPatchApiArg>({
      query: (queryArg) => ({ url: `/api/v1/users/save_last_link`, method: "PATCH", body: queryArg.userLastLink }),
    }),
    getRoles: build.query<ApiV1UsersRolesGetApiResponse, ApiV1UsersRolesGetApiArg>({
      query: () => ({ url: `/api/v1/users/roles` }),
    }),
    updateAvatar: build.mutation<ApiV1UsersUserIdAvatarPatchApiResponse, ApiV1UsersUserIdAvatarPatchApiArg>({
      query: (queryArg) => ({ url: `/api/v1/users/${queryArg.userId}/avatar`, method: "PATCH", body: queryArg.body }),
    }),
    updateUsersData: build.mutation<ApiV1UsersUserIdPatchApiResponse, ApiV1UsersUserIdPatchApiArg>({
      query: (queryArg) => ({ url: `/api/v1/users/${queryArg.userId}`, method: "PATCH", body: queryArg.userDataSchema }),
    }),
    changePassword: build.mutation<ApiV1UsersUserIdPasswordPatchApiResponse, ApiV1UsersUserIdPasswordPatchApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/users/${queryArg.userId}/password`,
        method: "PATCH",
        body: queryArg.userChangePasswordSchema,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as _userApi };
export type ApiV1UsersMeGetApiResponse = /** status 200 Successful Response */ UserSchema;
export type ApiV1UsersMeGetApiArg = void;
export type ApiV1UsersProfileGetApiResponse = /** status 200 Successful Response */ UserProfileSchema;
export type ApiV1UsersProfileGetApiArg = void;
export type ApiV1UsersSaveLastLinkPatchApiResponse = /** status 200 Successful Response */ any;
export type ApiV1UsersSaveLastLinkPatchApiArg = {
  userLastLink: UserLastLink;
};
export type ApiV1UsersRolesGetApiResponse = /** status 200 Successful Response */ RoleSchema[];
export type ApiV1UsersRolesGetApiArg = void;
export type ApiV1UsersUserIdAvatarPatchApiResponse = /** status 200 Successful Response */ UserAvatarSchema | null;
export type ApiV1UsersUserIdAvatarPatchApiArg = {
  userId: string;
  body: ApiV1UsersUserIdAvatarPatch;
};
export type ApiV1UsersUserIdPatchApiResponse = /** status 200 Successful Response */ UserDataSchema;
export type ApiV1UsersUserIdPatchApiArg = {
  userId: string;
  userDataSchema: UserDataSchema;
};
export type ApiV1UsersUserIdPasswordPatchApiResponse = /** status 200 Successful Response */ any;
export type ApiV1UsersUserIdPasswordPatchApiArg = {
  userId: string;
  userChangePasswordSchema: UserChangePasswordSchema;
};
export type RoleSchema = {
  id: number;
  name: string;
};
export type EmployeeNestedListSchema = {
  id: string;
  partnerId: string;
};
export type UserSchema = {
  email: string;
  id: string;
  phoneNumber?: string | null;
  fullName?: string | null;
  avatar?: string | null;
  lastLink?: string | null;
  roles?: RoleSchema[] | null;
  employee?: EmployeeNestedListSchema | null;
  shortenedName?: string | null;
};
export type ManagerUserSchema = {
  email: string;
  id: string;
  avatar?: string | null;
  fullName?: string | null;
  phoneNumber?: string | null;
  position?: string | null;
};
export type BonusOperation = {
  orderId: string;
  value: number;
  operationType: string;
  createdAt: string;
};
export type BonusSchema = {
  count: number;
  operations?: (BonusOperation | null)[];
};
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
export type UserCaseNestedIdSchema = {
  paidAmount?: number | null;
  dateImmunity?: string | null;
  caseSegment?: UserCaseSegmentSchema | null;
  id: number;
};
export type PartnerAddressSchema = {
  address: string;
  id: string;
};
export type EmployeeProfileSchema = {
  id: string;
};
export type HistoryCaseSchema = {
  id: number;
  dateChange: string;
  name?: string | null;
};
export type UserProfileSchema = {
  email: string;
  id: string;
  avatar?: string | null;
  fullName?: string | null;
  phoneNumber: string | null;
  position?: string | null;
  roles?: RoleSchema[] | null;
  manager?: ManagerUserSchema | null;
  bonus: BonusSchema;
  companyName?: string | null;
  userCase?: UserCaseNestedIdSchema | null;
  partnerAddresses?: PartnerAddressSchema[] | null;
  employee?: EmployeeProfileSchema | null;
  historyCases?: HistoryCaseSchema[] | null;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type UserLastLink = {
  lastLink: string;
};
export type UserAvatarSchema = {
  avatar?: string | null;
};
export type ApiV1UsersUserIdAvatarPatch = {
  avatar?: Blob;
};
export type UserDataSchema = {
  email: string;
  phoneNumber?: string | null;
  fullName?: string | null;
  bonusFlag?: boolean | null;
};
export type UserChangePasswordSchema = {
  password?: string | null;
  newPassword: string;
};
