import type {
  PartnerBrandsMarkupSchema,
  PartnerSubsectionMarkupSchema,
} from "@/app/api/apiGenerator/admin/partnersAdminApi";

import { useLayoutEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { partnersAdminApi } from "@/app/api/apiGenerator/admin";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { finResultActions } from "@/app/store/fin-result/slice";
import { useRTKAlert } from "@/shared/hooks/useRTKAlert";

import { FinResultTabs } from "../ui/const";

export function useResultFindBrands() {
  const [params, setParams] = useSearchParams(),
    [tab, setTab] = useState(params.get("tab") || FinResultTabs.BY_GROUP),
    [showModal, setShowModal] = useState(false),
    selectedTab = useRef(params.get("tab") || FinResultTabs.BY_GROUP),
    markup = partnersAdminApi.useGetMarkupAdminQuery(),
    sections = useAppSelector((s) => s.finResult.sections),
    isDirty = useAppSelector((s) => s.finResult.isDirty),
    [fetchByGroup, { isLoading: isLoadingGroup }] = partnersAdminApi.usePostOrPutSubsectionMarkupAdminMutation(),
    [fetchByBrand, { isLoading: isLoadingBrand }] = partnersAdminApi.usePostOrPutBrandsMarkupAdminMutation(),
    alert = useRTKAlert(),
    dispatch = useAppDispatch(),
    changedIds = useAppSelector((state) => state.finResult.changedIds),
    [showWarningModal, setShowWarningModal] = useState(false);

  function onSummit() {
    if (sections.some((x) => x.subSections?.some((x) => !x.markup))) {
      return setShowWarningModal(true);
    }

    if (params.get("tab") === FinResultTabs.BY_GROUP) {
      const data: PartnerSubsectionMarkupSchema[] = sections.reduce((a, c) => {
        c.subSections?.forEach((x) => {
          a.push({ subsectionId: x.id, markup: +(x.markup || 0) });
        });

        return a;
      }, [] as PartnerSubsectionMarkupSchema[]);

      fetchByGroup({ payload: data }).then((x) => {
        alert("Скидки обновлены", "Не удалось обновить скидки")(x);

        if ("data" in x) {
          dispatch(finResultActions.setChangedIds([]));
          dispatch(finResultActions.setDirty(false));
        }
      });
    } else {
      const data: PartnerBrandsMarkupSchema[] = sections.reduce((a, c) => {
        c.subSections?.forEach((x) => {
          a.push({ subsectionId: x.id, markup: +(x.markup || 0), brandId: c.id });
        });

        return a;
      }, [] as PartnerBrandsMarkupSchema[]);

      fetchByBrand({ payload: data }).then((x) => {
        alert("Скидки обновлены", "Не удалось обновить скидки")(x);
        if ("data" in x) {
          dispatch(finResultActions.setChangedIds([]));
          dispatch(finResultActions.setDirty(false));
        }
      });
    }
  }

  useLayoutEffect(() => {
    if (!params.get("tab")) setParams({ tab });
  }, []);

  useLayoutEffect(() => {
    setTab(params.get("tab") || "byGroup");
  }, [params]);

  return {
    tab,
    setTab,
    showModal,
    setShowModal,
    selectedTab,
    markup,
    setParams,
    params,
    sections,
    isDirty,
    onSummit,
    changedIds,
    loading: isLoadingGroup || isLoadingBrand,
    setShowWarningModal,
    showWarningModal,
  };
}
