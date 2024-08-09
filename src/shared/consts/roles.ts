export enum Roles {
  PARTNER = 1,
  ADMIN_SM = 2,
  CONTENT_MANAGER_SM = 3,
  SUPERVISOR_SM = 4,
  SENIOR_MANAGER_SM = 5,
  MANAGER_SM = 6,
  PARTNER_PURCHASING_MANAGER = 7,
  PARTNER_ACCOUNTANT = 8,
  PARTNER_ADMIN = 9,
  SELLER = 10,
  STOREKEEPER = 11,
}

/** Отсортированные роли */
export const ROLES_NAMES_MAP = new Map([
  [Roles.SUPERVISOR_SM, "Руководитель СМ"],
  [Roles.ADMIN_SM, "Администратор СМ"],
  [Roles.CONTENT_MANAGER_SM, "Контент менеджер СМ"],
  [Roles.SENIOR_MANAGER_SM, "Старший менеджер СМ"],
  [Roles.MANAGER_SM, "Менеджер СМ"],
  [Roles.PARTNER, "Партнер"],
  [Roles.PARTNER_ADMIN, "Администратор партнера"],
  [Roles.PARTNER_PURCHASING_MANAGER, "Менеджер по закупкам партнера"],
  [Roles.SELLER, "Продавец"],
  [Roles.PARTNER_ACCOUNTANT, "Бухгалтер партнера"],
  [Roles.STOREKEEPER, "Кладовщик"],
]);

/** Опции для Select */
export const rolesSelectOptions = [...ROLES_NAMES_MAP.entries()].map(([k, v]) => ({
  name: v,
  value: `${k}`,
}));

export const rolesSelectOptionsAll = [
  { name: "Все сотрудники", value: rolesSelectOptions.map((x) => x.value).join(",") },
  ...rolesSelectOptions,
];

export const rolesFiltered = (roles: Roles[]) => rolesSelectOptionsAll.filter((x) => roles.includes(+x.value));

export const SUPER_ROLES = [Roles.ADMIN_SM, Roles.CONTENT_MANAGER_SM, Roles.SUPERVISOR_SM];

export const EMPLOYER_ROLES = [
  Roles.ADMIN_SM,
  Roles.CONTENT_MANAGER_SM,
  Roles.SUPERVISOR_SM,
  Roles.MANAGER_SM,
  Roles.SENIOR_MANAGER_SM,
];
