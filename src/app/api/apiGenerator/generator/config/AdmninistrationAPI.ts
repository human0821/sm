import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "https://sm.itfactory.site/static-backend/administration_openapi.json",
  apiFile: "../../../index.ts",
  apiImport: "apiSlice",
  outputFiles: {
    "../../admin/partnersAdminApi.ts": {
      filterEndpoints: [/1partners/i],
      exportName: "_partnersAdminApi",
    },
    "../../admin/newsAdminApi.ts": {
      filterEndpoints: [/1news/i],
      exportName: "_newsAdminApi",
    },
    "../../admin/bannersAdminApi.ts": {
      filterEndpoints: [/1banners/i],
      exportName: "_bannersAdminApi",
    },
    "../../admin/picturesAdminApi.ts": {
      filterEndpoints: [/1pictures/i],
      exportName: "_picturesAdminApi",
    },
    "../../admin/usersAdminApi.ts": {
      filterEndpoints: [/1users/i],
      exportName: "_usersAdminApi",
    },
  },
};

export default config;
