const enum Routes {
  MAIN_PAGE = "/",
  NOT_FOUND_PAGE = "*",
  STYLEGUIDE_PAGE = "/styleguide",

  DASHBOARD_PAGE = "/dashboard",
  NEWS_PAGE = "/news/:id",
  NEWS = "/news",
  PRODUCT_PAGE = "/product/:id",

  CATALOG_PAGE = "/catalog",
  PROMOTIONS_PAGE = "/promotions",

  ACCOUNT_EMPLOYEES_PAGE = "/account",
  ACCOUNT_EMPLOYEE_CREATE_PAGE = "/account/create",
  ACCOUNT_EMPLOYEE_PAGE = "/account/:id",
  ACCOUNT_COUNTERPARTIES_PAGE = "/account/counterparties",
  CREATE_COUNTERPARTIES_PAGE = "/account/counterparties/create",
  ACCOUNT_COUNTERPARTY_PAGE = "/account/counterparties/:id",
  ACCOUNT_SITE_SETTINGS_PAGE = "/account/site-settings",
  ACCOUNT_FINANCIAL_RESULTS_PAGE = "/account/financial-results",
  ACCOUNT_SETTINGS_NOTIFICATIONS_PAGE = "/account/settings-notifications",

  /** Администрирование системы */
  SYSTEM_PAGE = "/system",
  SYSTEM_PARTNERS_PAGE = "/system/partners",
  SYSTEM_NOTIFICATIONS_PAGE = "/system/notifications",
  SYSTEM_MESSAGES_PAGE = "/system/messages",
  SYSTEM_CATALOGS_PAGE = "/system/catalogs",
  SYSTEM_NEWS_FEED_PAGE = "/system/news",
  SYSTEM_NEWS_CREATE_PAGE = "/system/news/create",
  SYSTEM_BANNERS_PAGE = "/system/banners",
  SYSTEM_BANNERS_СREATE_PAGE = "/system/banners/create",
  SYSTEM_BANNER_PAGE = "/system/banners/:id",
  SYSTEM_CASES_PAGE = "/system/cases",
  SYSTEM_CASE_PAGE = "/system/cases/:id",

  PROFILE_PAGE = "/profile",
  PROFILE_BONUS_PAGE = "/profile/bonus",
  PROFILE_CASES_PAGE = "/profile/cases",

  FAQ_PAGE = "/faq",
  FAQ_CREATE_PAGE = "/faq/create",
  FAQ_DETAIL_PAGE = "/faq/:id",

  NOTIFICATIONS_PAGE = "/notifications",

  AUTH_LAYOUT_ROUTE = "/auth",
  AUTH_LOGIN_PAGE = "/auth/login",
  AUTH_ADD_PROFILE_PAGE = "/auth/login/add-profile",
  AUTH_CHANGE_PASSWORD_PAGE = "/auth/change-password",
  AUTH_CHANGE_PASSWORD_SUCCESS_PAGE = "/auth/change-password/success",
  AUTH_RESET_PASSWORD_PAGE = "/auth/reset-password",
  AUTH_RESET_PASSWORD_SUCCESS_PAGE = "/auth/reset-password/success",
}

export default Routes;
