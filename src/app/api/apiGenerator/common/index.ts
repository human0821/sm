import { _c1Api } from "./1cApi";
import { _adminApi } from "./adminApi";
import { _casesApi } from "./casesApi";
import { _counterpartyApi } from "./counterpartyApi";
import { _employeesApi } from "./employeesApi";
import { _partnersApi } from "./partnersApi";
import { _securityApi } from "./securityApi";
import { _userApi } from "./userApi";

/** В этом месте усиливаем наши точки и добавляем к ним функционал по необходимости
 *  (автоматически сгенерированные точки не трогаем) */

const userApi = _userApi.enhanceEndpoints({});
// const authApi = _authApi.enhanceEndpoints({});
// const menuApi = _menuApi.enhanceEndpoints({});
const employeesApi = _employeesApi.enhanceEndpoints({
  endpoints: {
    getEmployee: {
      providesTags: ["EmployeeDetail"],
    },
    putEmployee: {
      invalidatesTags: ["PartnersDiscounts"],
    },
  },
});
const c1Api = _c1Api.enhanceEndpoints({});
const adminApi = _adminApi.enhanceEndpoints({});
const securityApi = _securityApi.enhanceEndpoints({});
const counterpartyApi = _counterpartyApi.enhanceEndpoints({});
const partnersApi = _partnersApi.enhanceEndpoints({
  endpoints: {
    getListOfAddresses: {
      providesTags: ["PartnersAddresses"],
    },
    putAddress: {
      invalidatesTags: ["PartnersAddresses"],
    },
    postAddress: {
      invalidatesTags: ["PartnersAddresses"],
    },
    deleteAddress: {
      invalidatesTags: ["PartnersAddresses"],
    },
  },
});
// const newsApi = _newsApi.enhanceEndpoints({});
const casesApi = _casesApi.enhanceEndpoints({
  endpoints: {
    getCases: {
      providesTags: ["CasesDetail"],
    },
    getUsersCase: {
      providesTags: ["CurrentCase"],
    },
    putPriveleges: {
      invalidatesTags: ["CasesDetail"],
    },
  },
});

export {
  adminApi,
  c1Api,
  // newsApi,
  casesApi,
  counterpartyApi,
  // authApi,
  // menuApi,
  employeesApi,
  partnersApi,
  securityApi,
  userApi,
};
