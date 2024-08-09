import ApiMicroservices from "@/app/consts/ApiMicroservices";

const usersApi = ApiMicroservices.USERS;
const notificationsApi = ApiMicroservices.NOTIFICATIONS;

const PartnersEndpoints = {
  MAIN_INFO: `${notificationsApi}/partners/main_info`,
  ADDRESSES: () => `${usersApi}/partners/addresses`,
  ADDRESS: (addressId: number) => `${usersApi}/partners/addresses/${String(addressId)}`,
  MANAGER: `${usersApi}/partners/manager`,
  ALL_EMPLOYEES: `${usersApi}/admin/partners/employees`,
  UPDATE_PARTNER_INFO: `${notificationsApi}/partners/main_info`,
  DESIGN_SCHEMA: `${notificationsApi}/partners/site_design`,
  MARKUP: `${notificationsApi}/partners/markup`,
  DISCOUNT: `${notificationsApi}/partners/discount`,
  ALL_COLORS: `${notificationsApi}/partners/site_design/colors`,
};

export default PartnersEndpoints;
