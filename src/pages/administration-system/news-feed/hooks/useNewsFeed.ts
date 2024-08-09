import { useCallback, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "react-router-dom";

import { newsAdminApi } from "@/app/api/apiGenerator/admin";
import { DATEPICKER_FORMAT } from "@/shared/consts/dateFormat";
import { dateFormat } from "@/shared/utils/dateUtils";
import { throttle } from "@/shared/utils/throttling";

type Form = ApiRTK.RequestMutationLazy<typeof newsAdminApi.useLazyGetAllNewsAdminQuery>;
export function useNewsFeed() {
  const search = useSearchParams()[0] || "",
    form = useForm<Form>({
      defaultValues: {
        search: search.get("search") || "",
      },
    }),
    isDirty = useRef(false),
    [getNews, { isFetching, data }] = newsAdminApi.useLazyGetAllNewsAdminQuery(),
    submit = useCallback(
      throttle((data: Form) => {
        isDirty.current = true;
        if (data.newsType === "all") data.newsType = "";
        if (data.dateFinish) data.dateFinish = dateFormat(data.dateFinish, { format: DATEPICKER_FORMAT });
        if (data.datePublish) data.datePublish = dateFormat(data.datePublish, { format: DATEPICKER_FORMAT });
        getNews(data, true);
      }, 1500),
      [],
    );

  const _search = search.get("search") || "",
    page = Number(search.get("page")) || 1;

  useEffect(() => {
    form.setValue("search", _search);
    form.setValue("page", page);

    submit(form.getValues());
  }, [_search, page]);

  return {
    form,
    submit,
    news: data,
    isLoading: isFetching,
    isDirty: isDirty.current,
  };
}
