import type { EmployeeSmPartnerSchema } from "@/app/api/apiGenerator/common/employeesApi";

import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";

import { employeesApi } from "@/app/api/apiGenerator/common";
import { EmployeeProfile } from "@/widgets/account";

export function AccountEmployeePage() {
  const { id } = useParams();
  const fetchEmployee = employeesApi.useGetEmployeeQuery({ employeeId: `${id}` }, { refetchOnMountOrArgChange: true });
  const [data, setData] = useState<EmployeeSmPartnerSchema>();

  useEffect(() => {
    if (fetchEmployee.data) {
      setData(fetchEmployee.data);
    }
  }, [fetchEmployee]);

  return (
    <>
      <Helmet>Профиль сотрудника</Helmet>
      <EmployeeProfile data={data} isLoading={fetchEmployee.isFetching} isDetail />
    </>
  );
}
