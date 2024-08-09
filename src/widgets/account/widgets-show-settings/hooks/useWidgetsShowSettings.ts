import type { ApiV1PartnersWidgetsGetApiResponse } from "@/app/api/apiGenerator/admin/partnersAdminApi";
import type { FormEvent } from "react";

import { useEffect, useState } from "react";

import { partnersAdminApi } from "@/app/api/apiGenerator/admin";
import { useRTKAlert } from "@/shared/hooks/useRTKAlert";

export function useWidgetsShowSettings() {
  const [setWidgets, { isLoading }] = partnersAdminApi.usePatchWidgetsInfoAdminMutation(),
    alert = useRTKAlert(),
    [isDirty, setDirty] = useState(false),
    widgets = partnersAdminApi.useGetWidgetsInfoAdminQuery(),
    [widgetsState, setWidgetsState] = useState<ApiV1PartnersWidgetsGetApiResponse>();

  useEffect(() => {
    if (widgets.data) {
      setWidgetsState(structuredClone(widgets.data));
    }
  }, [widgets.data]);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const result = widgetsState?.map((x) => ({
      menuId: parseInt(`${x.id}`),
      roles: x.roles.map((x) => ({ roleId: x.id, chosen: !!x.chosen })),
    }));

    if (result) setWidgets({ payload: result }).then(alert("Виджеты обновлены", "Не удалось обновить виджеты"));
  }

  return {
    widgets: widgetsState,
    setWidgetsState,
    submit,
    isLoading,
    isDirty,
    setDirty,
  };
}
