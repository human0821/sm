import { apiSlice as api } from "../../index";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getMenu: build.query<ApiV1MenuGetApiResponse, ApiV1MenuGetApiArg>({
      query: () => ({ url: `/api/v1/menu` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as _menuApi };
export type ApiV1MenuGetApiResponse = /** status 200 Successful Response */ MenuSchema[];
export type ApiV1MenuGetApiArg = void;
export type MenuSubSchema = {
  id: number;
  name: string;
  status: boolean;
};
export type MenuSchema = {
  id: number;
  name: string;
  status: boolean;
  subMenu?: MenuSubSchema[] | null;
};
