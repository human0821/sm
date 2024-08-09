import Routes from "@/app/routes/consts/routes";

export const accountNavigate = [
  { value: Routes.ACCOUNT_EMPLOYEES_PAGE, label: "Сотрудники" },
  { value: Routes.ACCOUNT_COUNTERPARTIES_PAGE, label: "Контрагенты", disabled: true },
  { value: Routes.ACCOUNT_SITE_SETTINGS_PAGE, label: "Отображение сайта" },
  { value: Routes.ACCOUNT_SETTINGS_NOTIFICATIONS_PAGE, label: "Настройка уведомлений" },
  { value: Routes.ACCOUNT_FINANCIAL_RESULTS_PAGE, label: "Финансовый результат и наценка", disabled: true },
];
