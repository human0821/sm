import { objectKeysToCamel } from "@/shared/utils/stringHelpers";

import EmployeesEndpoints from "./endpoints";
import { apiSlice } from "../index";

export const employeesEndpointsApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEmployees: builder.query<Api.ResponseWithPagePaginate<EmployeesApi.EmployeeItem>, string>({
      query: (searchParam) => {
        return {
          url: `${EmployeesEndpoints.ALL_EMPLOYEES}${searchParam}`,
          method: "GET",
        };
      },
      transformResponse(response: Api.ResponseWithPagePaginate<EmployeesApi.EmployeeItem>) {
        return objectKeysToCamel(response) as Api.ResponseWithPagePaginate<EmployeesApi.EmployeeItem>;
      },
      providesTags: ["EmployeesList"],
    }),
    getEmployeesRoles: builder.query<StoreUser.UserRole[], void>({
      query: () => {
        return {
          url: EmployeesEndpoints.ROLES,
          method: "GET",
        };
      },

      transformResponse(response: StoreUser.UserRole[]) {
        return response;
      },
      providesTags: ["EmployeesRoles"],
    }),
    changePropsEmployee: builder.mutation<
      EmployeesApi.EmployeeItem,
      { id: string | number; body: object; withTag?: boolean }
    >({
      query: ({ id, body }) => {
        return {
          url: EmployeesEndpoints.CHANGE_PROPS_EMPLOYEE(id),
          method: "PATCH",
          body,
        };
      },
      transformResponse(response: EmployeesApi.EmployeeItem) {
        return response;
      },
      invalidatesTags: (result, error, arg) => (arg.withTag ? ["EmployeeDetail"] : []),
    }),
  }),
});

export const { useGetEmployeesQuery, useGetEmployeesRolesQuery, useChangePropsEmployeeMutation } = employeesEndpointsApi;
