import { useEffect, useState } from "react";

import { useGetEmployeesRolesQuery } from "@/app/api/employees/api";

export const useFetchRoles = (defaultValue?: Select.Option[]) => {
  const [roles, setRoles] = useState<Select.Option[]>(defaultValue || []);
  const fetchRoles = useGetEmployeesRolesQuery();

  useEffect(() => {
    if (fetchRoles.data) {
      const newRoles = fetchRoles.data.map(({ id, name }) => ({ value: `${id}`, name }));
      setRoles([...roles, ...newRoles]);
    }
  }, [fetchRoles]);

  return { roles };
};
