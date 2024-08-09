import { Helmet } from "react-helmet-async";

import { EmployeeProfile } from "@/widgets/account";

export function AccountEmployeeCreatePage() {
  return (
    <>
      <Helmet>Создание сотрудника</Helmet>
      <EmployeeProfile />
    </>
  );
}
