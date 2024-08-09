import type { ApiV1NewsPost, NewsTypeEnum } from "@/app/api/apiGenerator/admin/newsAdminApi";
import type { NewsCardV2Props } from "@/entities/news/ui/NewsCardEntityAdmin/types";

import { useReducer, type Dispatch, type SetStateAction } from "react";
import { useForm } from "react-hook-form";

import { newsAdminApi } from "@/app/api/apiGenerator/admin";
import { useAppSelector } from "@/app/store";
import LocalStorage from "@/shared/consts/localStorage";
import { useRTKAlert } from "@/shared/hooks/useRTKAlert";
import { createFormData } from "@/shared/utils/createFormData";

export function useNewsCreate(setNewsCreated: Dispatch<SetStateAction<NewsCardV2Props | null>>) {
  const preNews = JSON.parse(localStorage.getItem(LocalStorage.NEWS_PRE_CREATE) || "{}"),
    userId = useAppSelector((state) => state.user.user?.id) || "",
    form = useForm<ApiV1NewsPost>({
      defaultValues: preNews[userId] || {
        newsType: "Новость",
        dateFinish: "",
        datePublish: "",
        header: "",
        pinFlag: false,
        commentFlag: false,
        importantFlag: false,
        manyChoiceFlag: false,
        freeAnswerFlag: false,
        hideResultsFlag: false,
        forAllFlag: false,
        answers: "",
        text: "",
      },
    }),
    [postNewsAdmin, { isLoading }] = newsAdminApi.usePostNewsAdminMutation(),
    alert = useRTKAlert(),
    formValues = form.getValues(),
    [_, render] = useReducer(() => ({}), {});

  form.watch((x) => {
    if (userId) {
      const newsPreCreate = JSON.parse(localStorage.getItem(LocalStorage.NEWS_PRE_CREATE) || "{}");

      localStorage.setItem(
        LocalStorage.NEWS_PRE_CREATE,
        JSON.stringify({
          ...newsPreCreate,
          [userId]: x,
        }),
      );
    }
    render();
  });

  function submit(data: ApiV1NewsPost) {
    postNewsAdmin({ ApiV1NewsPost: createFormData(data) }).then((x) => {
      alert("Запись успешно создана", (x) => x.data.detail || "Не удалось создать запись")(x);
      if ("error" in x) return;
      if ("datePublish" in x.data) {
        const preNews = JSON.parse(localStorage.getItem(LocalStorage.NEWS_PRE_CREATE) || "{}");
        localStorage.setItem(LocalStorage.NEWS_PRE_CREATE, JSON.stringify({ ...preNews, [userId]: null }));

        setNewsCreated({
          datePublish: x.data.datePublish,
          header: x.data.header,
          id: x.data.id,
          newsType: x.data.newsType,
          roles: x.data.roles || undefined,
          importantFlag: !!x.data.importantFlag,
          comments: 0,
        });
      }
    });
  }

  const requiredValues: Record<NewsTypeEnum | "all", any[]> = {
    all: [formValues.newsType, formValues.roles, formValues.dateFinish, formValues.datePublish, formValues.header],
    Опрос: [formValues.answers?.split(",").filter(Boolean).length],
    Новость: [formValues.text],
  };

  const disableSubmit = requiredValues.all.some((x) => !x) || requiredValues[formValues.newsType].some((x) => !x);

  return { form, postNewsAdmin, isLoading, submit, disableSubmit };
}
