import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";
import { AccountListLayout } from "@/layouts/account";
import { CounterpartiesList } from "@/widgets/account";

export function AccountCounterpartiesPage() {
  const navigate = useNavigate();
  return (
    <AccountListLayout
      isCounterparties={true}
      title="Контрагенты"
      filters={{
        searchPlaceholder: "Поиск по записям",
        children: (
          <Button variant="contained" onClick={() => navigate(Routes.CREATE_COUNTERPARTIES_PAGE)}>
            Добавить сотрудника
          </Button>
        ),
      }}>
      <CounterpartiesList />
    </AccountListLayout>
  );
}
