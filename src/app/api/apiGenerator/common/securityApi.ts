import { apiSlice as api } from "../../index";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    changePartnerPassword: build.mutation<
      ApiV1SecurityPartnerPasswordPatchApiResponse,
      ApiV1SecurityPartnerPasswordPatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/security/partner/password`,
        method: "PATCH",
        body: queryArg.userChangePasswordSchema,
      }),
    }),
    firstChangePassword: build.mutation<
      ApiV1SecurityUserIdPasswordFirstChangePatchApiResponse,
      ApiV1SecurityUserIdPasswordFirstChangePatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/security/${queryArg.userId}/password/first_change`,
        method: "PATCH",
        body: queryArg.userFirstChangePasswordSchema,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as _securityApi };
export type ApiV1SecurityPartnerPasswordPatchApiResponse = /** status 200 Successful Response */ any;
export type ApiV1SecurityPartnerPasswordPatchApiArg = {
  userChangePasswordSchema: UserChangePasswordSchema;
};
export type ApiV1SecurityUserIdPasswordFirstChangePatchApiResponse = /** status 200 Successful Response */ any;
export type ApiV1SecurityUserIdPasswordFirstChangePatchApiArg = {
  userId: string;
  userFirstChangePasswordSchema: UserFirstChangePasswordSchema;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type UserChangePasswordSchema = {
  password?: string | null;
  newPassword: string;
};
export type UserFirstChangePasswordSchema = {
  password: string;
};
