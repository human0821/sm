import { apiSlice as api } from "../../index";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    checkEmail: build.mutation<ApiV1AuthCheckEmailPostApiResponse, ApiV1AuthCheckEmailPostApiArg>({
      query: (queryArg) => ({ url: `/api/v1/auth/check_email`, method: "POST", body: queryArg.userResetPasswordSchema }),
    }),
    login: build.mutation<ApiV1AuthLoginPostApiResponse, ApiV1AuthLoginPostApiArg>({
      query: (queryArg) => ({ url: `/api/v1/auth/login`, method: "POST", body: queryArg.ApiV1AuthLoginPost }),
    }),
    refreshToken: build.mutation<ApiV1AuthRefreshPostApiResponse, ApiV1AuthRefreshPostApiArg>({
      query: (queryArg) => ({ url: `/api/v1/auth/refresh`, method: "POST", body: queryArg.refreshTokenScheme }),
    }),
    restorePassword: build.mutation<ApiV1AuthRestorePasswordPostApiResponse, ApiV1AuthRestorePasswordPostApiArg>({
      query: (queryArg) => ({
        url: `/api/v1/auth/restore_password`,
        method: "POST",
        body: queryArg.userResetPasswordSchema,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as _authApi };
export type ApiV1AuthCheckEmailPostApiResponse = /** status 200 Successful Response */ any;
export type ApiV1AuthCheckEmailPostApiArg = {
  userResetPasswordSchema: UserResetPasswordSchema;
};
export type ApiV1AuthLoginPostApiResponse = /** status 200 Successful Response */ TokenSchema;
export type ApiV1AuthLoginPostApiArg = {
  ApiV1AuthLoginPost: ApiV1AuthLoginPost;
};
export type ApiV1AuthRefreshPostApiResponse = /** status 200 Successful Response */ AccessTokenScheme;
export type ApiV1AuthRefreshPostApiArg = {
  refreshTokenScheme: RefreshTokenScheme;
};
export type ApiV1AuthRestorePasswordPostApiResponse = /** status 200 Successful Response */ any;
export type ApiV1AuthRestorePasswordPostApiArg = {
  userResetPasswordSchema: UserResetPasswordSchema;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type UserResetPasswordSchema = {
  email: string;
};
export type TokenSchema = {
  accessToken: string;
  refreshToken: string;
};
export type ApiV1AuthLoginPost = {
  email: string;
  password: string;
};
export type AccessTokenScheme = {
  accessToken: string;
  refreshToken: string;
};
export type RefreshTokenScheme = {
  refreshToken: string;
};
