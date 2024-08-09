import Routes from "@/app/routes/consts/routes";
import { BreadcrumbsLink } from "@/shared/ui/Breadcrumbs";

export const breadcrumbs = [
  <BreadcrumbsLink underline="hover" key="2" href={Routes.ACCOUNT_COUNTERPARTIES_PAGE}>
    Контрагенты
  </BreadcrumbsLink>,
  "Создание контрагента",
];
