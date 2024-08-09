import { apiSlice as api } from "../../index";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    setupUsersPassword: build.mutation<
      ApiV1AdminUsersSetupUsersPasswordPatchApiResponse,
      ApiV1AdminUsersSetupUsersPasswordPatchApiArg
    >({
      query: (queryArg) => ({
        url: `/api/v1/admin/users/setup_users_password`,
        method: "PATCH",
        body: queryArg.userSetupPasswordSchema,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as _adminApi };
export type ApiV1AdminUsersSetupUsersPasswordPatchApiResponse = /** status 200 Successful Response */ any;
export type ApiV1AdminUsersSetupUsersPasswordPatchApiArg = {
  userSetupPasswordSchema: UserSetupPasswordSchema;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type UserSetupPasswordSchema = {
  password: string;
  id: string;
};
