import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { partnersAdminApi } from "@/app/api/apiGenerator/admin";
import { useRTKAlert } from "@/shared/hooks/useRTKAlert";

export function useDiscountsSellers() {
  const form = useForm<Record<string, number | string>>(),
    partnersDiscounts = partnersAdminApi.useGetDiscountAdminQuery(),
    [putDiscounts, { isLoading: isLoadingPut }] = partnersAdminApi.usePutOrCreateDiscountAdminMutation(),
    alert = useRTKAlert();

  form.watch();

  useEffect(() => {
    if (partnersDiscounts)
      form.reset(partnersDiscounts.data?.reduce((acc, user) => ({ ...acc, [user!.id]: user!.discount }), {}));
  }, [partnersDiscounts.data]);

  const submit = (data: Record<string, string | number>) => {
    if (Object.keys(data).length)
      putDiscounts({ payload: Object.entries(data).map(([key, value]) => ({ sellerId: key, discount: +value })) }).then(
        (x) => {
          alert("Скидки обновлены", "Не удалось обновить скидки")(x);
          if ("data" in x) form.reset(data);
        },
      );
  };

  return { submit, form, partnersDiscounts, isLoadingPut };
}
