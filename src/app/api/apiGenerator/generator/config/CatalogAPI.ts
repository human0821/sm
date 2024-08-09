import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "https://sm.itfactory.site/static-backend/catalog_openapi.json",
  apiFile: "../../../index.ts",
  apiImport: "apiSlice",
  outputFiles: {
    "../../catalog/sectionsCatalogApi.ts": {
      filterEndpoints: [/1sections/i],
      exportName: "_sectionsCatalogApi",
    },
  },
};

export default config;
