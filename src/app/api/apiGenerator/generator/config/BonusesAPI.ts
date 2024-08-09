import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "https://sm.itfactory.site/static-backend/bonuses_openapi.json",
  apiFile: "../../../index.ts",
  apiImport: "apiSlice",
  outputFiles: {
    "../../bonuses/bonusesApi.ts": {
      filterEndpoints: [/1info/i],
      exportName: "_bonusesApi",
    },
  },
};

export default config;
