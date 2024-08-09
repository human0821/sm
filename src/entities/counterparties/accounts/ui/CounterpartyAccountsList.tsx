import { CounterpartyInfoAccount } from "@/features/account";

import { AccountsList, AccountsListScrollbar } from "./CounterpartyAccountsList.styled";

export const CounterpartyAccountsListEntity = ({ list, counterpartyId, onMainFlag }: AccountsListEntity) => {
  return (
    <AccountsList>
      {list.length > 0 ? (
        <AccountsListScrollbar>
          {list.map(({ id, mainFlag, ...other }) => (
            <CounterpartyInfoAccount
              key={id}
              data={{ ...other, id }}
              mainFlag={mainFlag}
              counterpartyId={counterpartyId}
              onMainFlag={onMainFlag}
            />
          ))}
        </AccountsListScrollbar>
      ) : (
        <CounterpartyInfoAccount counterpartyId={counterpartyId} mainFlag={false} />
      )}
    </AccountsList>
  );
};
