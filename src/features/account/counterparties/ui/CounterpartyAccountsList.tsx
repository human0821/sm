import { useEffect, useState } from "react";

import { CounterpartyAccountsListEntity } from "@/entities/counterparties/accounts";

export const CounterpartyAccountsList = ({ list, counterpartyId }: CounterpartyAccountsList) => {
  const [accounts, setAccounts] = useState(list);

  useEffect(() => {
    setAccounts(list);
  }, [list]);

  const changeMainFlag = (id: number | string) => {
    setAccounts(list.map((item) => ({ ...item, mainFlag: item.id === id })));
  };

  return <CounterpartyAccountsListEntity list={accounts} counterpartyId={counterpartyId} onMainFlag={changeMainFlag} />;
};
