import ApiMicroservices from "@/app/consts/ApiMicroservices";
import ContentTypes from "@/shared/consts/contentTypes";
import { combinePath } from "@/shared/utils/apiHelpers";

import AuthEndpoints from "./endpoints";
import { apiSlice, tagTypes } from "..";

export const authApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    checkEmail: builder.mutation<ApiAuthResponse.CheckEmail, ApiAuthRequest.CheckEmail>({
      query: (body: ApiAuthRequest.CheckEmail) => {
        return {
          url: `${ApiMicroservices.USERS}${AuthEndpoints.CHECK_EMAIL}`,
          method: "POST",
          body: {
            email: body.email.trim(),
          },
        };
      },
    }),
    login: builder.mutation<ApiAuthResponse.Login, ApiAuthRequest.Login>({
      query: (body: ApiAuthRequest.Login) => {
        return {
          url: `${ApiMicroservices.USERS}${AuthEndpoints.LOGIN}`,
          method: "POST",
          headers: {
            "Content-Type": ContentTypes.APPLICATION_X_WWW,
          },
          body: new URLSearchParams({
            email: body.email.trim(),
            password: body.password,
          }).toString(),
        };
      },
      invalidatesTags: tagTypes,
    }),
    refresh: builder.mutation<ApiAuthResponse.Refresh, ApiAuthRequest.Refresh>({
      query: (body: ApiAuthRequest.Refresh) => {
        return {
          url: `${ApiMicroservices.USERS}${AuthEndpoints.REFRESH}`,
          method: "POST",
          body,
        };
      },
    }),
    changePassword: builder.mutation<ApiAuthResponse.ChangePassword, ApiAuthRequest.ChangePassword>({
      query: (body: ApiAuthRequest.ChangePassword) => {
        return {
          url: combinePath(`${ApiMicroservices.USERS}${AuthEndpoints.CHANGE_PASSWORD}`, [
            body.userId,
            "password",
            "first_change",
          ]),
          method: "PATCH",
          body: {
            password: body.password,
          },
        };
      },
    }),
    resetPassword: builder.mutation<void, ApiAuthRequest.ResetPassword>({
      query: (body: ApiAuthRequest.ResetPassword) => {
        return {
          url: `${ApiMicroservices.USERS}${AuthEndpoints.RESTORE_PASSWORD}`,
          method: "POST",
          headers: {
            "Content-Type": ContentTypes.APPLICATION_JSON,
          },
          body: {
            email: body.email.trim(),
          },
        };
      },
    }),
  }),
});

export const {
  useCheckEmailMutation,
  useLoginMutation,
  useRefreshMutation,
  useChangePasswordMutation,
  useResetPasswordMutation,
} = authApi;
