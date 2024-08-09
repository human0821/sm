interface CounterpartiesInfo {
  name: string;
  email: string;
  inn: string;
  companyAddress: string;
  phone: string;
  kpp: string;
}

interface CounterpartiesInfoAccountEntity {
  buttonLoading?: boolean;
  data?: Omit<CounterpartiesApi.CounterpartyAccount, "mainFlag">;
  mainFlag: CounterpartiesApi.CounterpartyAccount["mainFlag"];
  onMainFlag?: () => void;
}
