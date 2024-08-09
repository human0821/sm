import ApiMicroservices from "@/app/consts/ApiMicroservices";

const EmployeesEndpoints = {
  ALL_EMPLOYEES: `${ApiMicroservices.USERS}/employees`,
  ROLES: `${ApiMicroservices.USERS}/employees/roles`,
  CHANGE_PROPS_EMPLOYEE: (id: string | number) => `${ApiMicroservices.USERS}/employees/${id}`,
};

export default EmployeesEndpoints;
