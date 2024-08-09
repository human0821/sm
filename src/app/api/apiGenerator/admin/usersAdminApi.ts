import { apiSlice as api } from "../../index";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getRolesByMenuAdmin: build.query<ApiV1UsersMenuRolesGetApiResponse, ApiV1UsersMenuRolesGetApiArg>({
      query: () => ({ url: `administration/api/v1/users/menu_roles` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as _usersAdminApi };
export type ApiV1UsersMenuRolesGetApiResponse = /** status 200 Successful Response */ WidgetMenuSchema[];
export type ApiV1UsersMenuRolesGetApiArg = void;
export type RoleSchema = {
  id: number;
  name: string;
};
export type WidgetMenuSchema = {
  id: number;
  name: string;
  roles: RoleSchema[];
};
