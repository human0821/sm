import { apiSlice as api } from "../../index";
const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    getSectionsCatalog: build.query<ApiV1SectionsGetApiResponse, ApiV1SectionsGetApiArg>({
      query: () => ({ url: `catalog/api/v1/sections` }),
    }),
    patchSubsectionImageCatalog: build.mutation<
      ApiV1SectionsSubsectionsSubSectionIdPatchApiResponse,
      ApiV1SectionsSubsectionsSubSectionIdPatchApiArg
    >({
      query: (queryArg) => ({
        url: `catalog/api/v1/sections/subsections/${queryArg.subSectionId}`,
        method: "PATCH",
        body: queryArg.ApiV1SectionsSubsectionsSubSectionIdPatch,
      }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as _sectionsCatalogApi };
export type ApiV1SectionsGetApiResponse = /** status 200 Successful Response */ SectionNestedSchema[];
export type ApiV1SectionsGetApiArg = void;
export type ApiV1SectionsSubsectionsSubSectionIdPatchApiResponse = /** status 200 Successful Response */ SubSectionSchema;
export type ApiV1SectionsSubsectionsSubSectionIdPatchApiArg = {
  subSectionId: string;
  ApiV1SectionsSubsectionsSubSectionIdPatch: ApiV1SectionsSubsectionsSubSectionIdPatch;
};
export type SubSectionSchema = {
  id: string;
  name: string;
  image?: string | null;
  amount?: number;
};
export type SectionNestedSchema = {
  id: string;
  name: string;
  color?: string | null;
  subSections: SubSectionSchema[];
};
export type ValidationError = {
  loc: (string | number)[];
  msg: string;
  type: string;
};
export type HttpValidationError = {
  detail?: ValidationError[];
};
export type ApiV1SectionsSubsectionsSubSectionIdPatch = {
  image: Blob;
};
