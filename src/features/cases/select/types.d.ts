import type { ApiV1EmployeesPost } from "@/app/api/apiGenerator/common/employeesApi";
import type { SelectProps } from "@mui/material";

declare global {
  interface SelectCaseFeatures extends SelectProps {
    setValue: UseFormSetValue<Omit<ApiV1EmployeesPost, "id">>;
  }
}
