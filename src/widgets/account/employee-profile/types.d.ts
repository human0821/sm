import type { EmployeeSmPartnerSchema } from "@/app/api/apiGenerator/common/employeesApi";
declare global {
  interface EmployeeProfile {
    isDetail?: boolean;
    data?: EmployeeSmPartnerSchema;
    isLoading?: boolean;
  }
}
