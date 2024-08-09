interface CounterpartyAccountsList {
  counterpartyId: string | number;
  list: CounterpartiesApi.CounterpartyDetail["accounts"];
}

interface CounterpartyInfoAccount {
  counterpartyId: string | number;
  data?: Omit<CounterpartiesApi.CounterpartyAccount, "mainFlag">;
  mainFlag: CounterpartiesApi.CounterpartyAccount["mainFlag"];
  onMainFlag?: (id: string | number) => void;
}
