import { useSnackbar } from "notistack";
import { useEffect } from "react";

import { useSelectMainAccountMutation } from "@/app/api/counterparties/api";
import { CounterpartyInfoAccountEntity } from "@/entities/counterparties/info";
import { Variants } from "@/shared/consts/variants";

export const CounterpartyInfoAccount = ({ data, counterpartyId, mainFlag, onMainFlag }: CounterpartyInfoAccount) => {
  const [selectMainAccount, selectMainAccountState] = useSelectMainAccountMutation();
  const { enqueueSnackbar } = useSnackbar();

  useEffect(() => {
    if (selectMainAccountState.isSuccess) {
      if (onMainFlag && data) {
        onMainFlag(data.id);
      }
    }
    if (selectMainAccountState.isError) {
      const error = selectMainAccountState.error as Api.ResponseError;
      enqueueSnackbar(
        typeof error.data?.detail === "string"
          ? error.data?.detail
          : error.data?.detail[0]?.msg || "При выполнении запроса что-то не так",
        {
          variant: Variants.ERROR,
        },
      );
    }
  }, [selectMainAccountState]);

  const changeMainFlag = () => {
    if (data) {
      selectMainAccount({ id: counterpartyId, body: { id: data.id, main_flag: !mainFlag } });
    }
  };

  return (
    <CounterpartyInfoAccountEntity
      data={data}
      mainFlag={mainFlag}
      buttonLoading={selectMainAccountState.isLoading}
      onMainFlag={changeMainFlag}
    />
  );
};
