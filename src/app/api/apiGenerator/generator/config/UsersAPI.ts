import type { ConfigFile } from "@rtk-query/codegen-openapi";

const config: ConfigFile = {
  schemaFile: "https://sm.itfactory.site/static-backend/openapi.json",
  apiFile: "../../../index.ts",
  apiImport: "apiSlice",
  outputFiles: {
    "../../common/userApi.ts": {
      filterEndpoints: [/1users/i],
      exportName: "_userApi",
    },
    "../../common/authApi.ts": {
      filterEndpoints: [/1auth/i],
      exportName: "_authApi",
    },
    "../../common/menuApi.ts": {
      filterEndpoints: [/1menu/i],
      exportName: "_menuApi",
    },
    "../../common/employeesApi.ts": {
      filterEndpoints: [/1employee/i],
      exportName: "_employeesApi",
    },
    "../../common/1cApi.ts": {
      filterEndpoints: [/11c/i],
      exportName: "_c1Api",
    },
    "../../common/adminApi.ts": {
      filterEndpoints: [/1admin/i],
      exportName: "_adminApi",
    },
    "../../common/securityApi.ts": {
      filterEndpoints: [/1security/i],
      exportName: "_securityApi",
    },
    "../../common/counterpartyApi.ts": {
      filterEndpoints: [/1counterparties/i],
      exportName: "_counterpartyApi",
    },
    "../../common/partnersApi.ts": {
      filterEndpoints: [/1partners/i],
      exportName: "_partnersApi",
    },
    "../../common/newsApi.ts": {
      filterEndpoints: [/1news/i],
      exportName: "_newsApi",
    },
    "../../common/casesApi.ts": {
      filterEndpoints: [/1cases/i],
      exportName: "_casesApi",
    },
  },
};

export default config;
