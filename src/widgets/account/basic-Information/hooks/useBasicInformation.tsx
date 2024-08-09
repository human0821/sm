import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { partnersAdminApi } from "@/app/api/apiGenerator/admin";
import { useAppDispatch, useAppSelector } from "@/app/store";
import { designActions } from "@/app/store/site-design-settings/slice";
import { useRTKAlert } from "@/shared/hooks/useRTKAlert";
import { trimMultipleSpaces } from "@/shared/utils/stringHelpers";

import { socialLinks } from "../const";

export function useBasicInformation() {
  const dispatch = useAppDispatch();
  const form = useForm<Omit<LayoutMenuFooterEntity, "id">>({
      defaultValues: {
        email: "",
        phoneNumber: "",
        description: "",
        name: "",
        vkLink: "",
        okLink: "",
        telegramLink: "",
      },
    }),
    partnerInfo = partnersAdminApi.useGetMainInfoAdminQuery(),
    [partnerInfoSubmit, { isLoading: isLoadingPartner }] = partnersAdminApi.usePatchMainInfoAdminMutation(),
    alert = useRTKAlert(),
    previewInfo = useAppSelector(({ design }) => design.previewCompanyInfo),
    dirtyInfo = useAppSelector(({ design }) => design.dirtyCompanyInfo),
    isDirty = Object.keys(dirtyInfo).some(
      (key) => dirtyInfo[key as keyof LayoutMenuFooterEntity] !== previewInfo[key as keyof LayoutMenuFooterEntity],
    ),
    isInit = useAppSelector(({ design }) => design.isInitInfo),
    isResetForm = useAppSelector(({ design }) => design.isResetForm);

  form.watch((x) => requestIdleCallback(() => dispatch(designActions.setDirtyCompanyInfo(x))));

  useEffect(() => {
    if (isInit && !isResetForm) {
      form.reset(dirtyInfo);
      dispatch(designActions.setResetForm(true));
    }
  }, [dirtyInfo, isInit, isResetForm]);

  function submit(data: ApiPartnersRequest.BasicInformation) {
    Object.keys(data).forEach((key) => {
      const k = key as keyof ApiPartnersRequest.BasicInformation;
      if (typeof data[k] === "string") data[k] = trimMultipleSpaces(data[k]!);
    });

    partnerInfoSubmit({ partnerMainInfoUpdateSchema: data }).then((x) => {
      alert("Основная информация обновлена", "Не удалось обновить основную информацию")(x);
      if ("data" in x) dispatch(designActions.setCompanyInfo(data));
    });
  }

  return {
    form,
    partnerInfo,
    submit,
    links: socialLinks,
    isLoadingPartner,
    isDirty,
  };
}
