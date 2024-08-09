import { apiSlice as api } from "../../index";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    postNewsPictureAdmin: build.mutation<ApiV1PicturesNewsPostApiResponse, ApiV1PicturesNewsPostApiArg>({
      query: (queryArg) => ({
        url: `administration/api/v1/pictures/news`,
        method: "POST",
        body: queryArg.ApiV1PicturesNewsPost,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as _picturesAdminApi };
export type ApiV1PicturesNewsPostApiResponse = /** status 200 Successful Response */ string;
export type ApiV1PicturesNewsPostApiArg = {
  ApiV1PicturesNewsPost: ApiV1PicturesNewsPost;
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type ApiV1PicturesNewsPost = {
  file: Blob;
};
