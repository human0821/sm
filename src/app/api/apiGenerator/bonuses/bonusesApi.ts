import { apiSlice as api } from "../../index";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getInfoBonuses: build.query<ApiV1InfoGetApiResponse, ApiV1InfoGetApiArg>({
      query: () => ({ url: `bonuses/api/v1/info` }),
    }),
    putInfoBonuses: build.mutation<ApiV1InfoPutApiResponse, ApiV1InfoPutApiArg>({
      query: (queryArg) => ({ url: `bonuses/api/v1/info`, method: "PUT", body: queryArg.infoCreateSchema }),
    }),
    postInfoBonuses: build.mutation<ApiV1InfoPostApiResponse, ApiV1InfoPostApiArg>({
      query: (queryArg) => ({ url: `bonuses/api/v1/info`, method: "POST", body: queryArg.infoCreateSchema }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as _bonusesApi };
export type ApiV1InfoGetApiResponse = /** status 200 Successful Response */ InfoSchema;
export type ApiV1InfoGetApiArg = void;
export type ApiV1InfoPutApiResponse = /** status 200 Successful Response */ InfoSchema;
export type ApiV1InfoPutApiArg = {
  infoCreateSchema: InfoCreateSchema;
};
export type ApiV1InfoPostApiResponse = /** status 200 Successful Response */ InfoSchema;
export type ApiV1InfoPostApiArg = {
  infoCreateSchema: InfoCreateSchema;
};
export type InfoSchema = {
  text: string;
  id: number;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type InfoCreateSchema = {
  text: string;
};
