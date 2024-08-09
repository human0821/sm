import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";
import { AccountListLayout } from "@/layouts/account";
import { EmployeesList } from "@/widgets/account";

export function AccountEmployeesPage() {
  const navigate = useNavigate();
  return (
    <AccountListLayout
      title="Сотрудники"
      filters={{
        roles: true,
        children: (
          <Button
            variant="contained"
            size="large"
            sx={{ flexShrink: 0 }}
            onClick={() => {
              navigate(Routes.ACCOUNT_EMPLOYEE_CREATE_PAGE);
            }}>
            Добавить сотрудника
          </Button>
        ),
      }}>
      <EmployeesList />
    </AccountListLayout>
  );
}
