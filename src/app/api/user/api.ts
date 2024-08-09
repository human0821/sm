/* eslint-disable @typescript-eslint/ban-types */
import { objectKeysToCamel } from "@/shared/utils/stringHelpers";

import UserEndpoints from "./endpoints";
import { apiSlice } from "../index";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUser: builder.mutation<StoreUser.User, void>({
      query: () => {
        return {
          url: UserEndpoints.ME,
          method: "GET",
        };
      },
      transformResponse(response: ApiUserResponse.GetUser) {
        return objectKeysToCamel(response) as StoreUser.User;
      },
    }),
    getRoles: builder.query<StoreUser.UserRole[], void>({
      query: () => {
        return {
          url: UserEndpoints.ROLES,
          method: "GET",
        };
      },
      transformResponse(response: StoreUser.UserRole[]) {
        return response;
      },
      providesTags: ["Roles"],
    }),
    updateAvatar: builder.mutation<ApiUserResponse.UpdateAvatar, ApiUserRequest.UpdateAvatar>({
      query: (payload) => {
        return {
          url: UserEndpoints.UPLOAD_AVATAR(payload.userId),
          method: "PATCH",
          headers: {},
          body: payload.body,
        };
      },
      invalidatesTags: ["Profile"],
    }),
    getProfile: builder.query<StoreUser.Profile, void>({
      query: () => {
        return {
          url: UserEndpoints.PROFILE,
          method: "GET",
        };
      },
      transformResponse(response: ApiUserResponse.GetProfile) {
        return objectKeysToCamel(response) as StoreUser.Profile;
      },
      providesTags: ["Profile"],
    }),
    changeProfilePassword: builder.mutation<void, ApiUserRequest.ChangePassword>({
      query: (body) => {
        return {
          url: UserEndpoints.CHANGE_PASSWORD(body.userId),
          method: "PATCH",
          body: {
            password: body.password,
            new_password: body.newPassword,
          },
        };
      },
    }),
    saveLastLink: builder.mutation<void, string>({
      query: (lastLink) => {
        return {
          url: UserEndpoints.SAVE_LAST_LINK,
          method: "PATCH",
          body: {
            last_link: lastLink,
          },
        };
      },
    }),
  }),
});

export const {
  useGetUserMutation,
  useUpdateAvatarMutation,
  useGetProfileQuery,
  useChangeProfilePasswordMutation,
  useGetRolesQuery,
  useSaveLastLinkMutation,
} = userApi;
