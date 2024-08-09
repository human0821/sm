import ApiMicroservices from "@/app/consts/ApiMicroservices";

const CounterpartiesEndpoints = {
  ALL_COUNTERPARTIES: `${ApiMicroservices.USERS}/counterparties`,
  CHANGE_ACTIVE: (id: string | number) => `${ApiMicroservices.USERS}/counterparties/${id}/activation`,
  GET_COUNTERPARTY: (id: string | number) => `${ApiMicroservices.USERS}/counterparties/${id}`,
  SELECT_MAIN_ACCOUNT: (id: string | number) => `${ApiMicroservices.USERS}/counterparties/${id}/accounts/select_main`,
};

export default CounterpartiesEndpoints;
