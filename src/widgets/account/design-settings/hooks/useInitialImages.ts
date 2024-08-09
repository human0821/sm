import { useEffect } from "react";

import { partnersAdminApi } from "@/app/api/apiGenerator/admin";
import { useGetDesignSchemaQuery } from "@/app/api/partners/api";
import { useAppDispatch } from "@/app/store";
import { designActions } from "@/app/store/site-design-settings/slice";

/** Инициализируем картинки и цветовую схему один раз для пользователя*/
export function useInitialDesignScheme(userId: string) {
  const dispatch = useAppDispatch();
  const { data: designSchema, isFetching, isError } = useGetDesignSchemaQuery(userId),
    companyInfo = partnersAdminApi.useGetMainInfoAdminQuery();

  const initImages = { header: designSchema?.header || "", side: designSchema?.side || "", logo: designSchema?.logo || "" };

  useEffect(() => {
    if (companyInfo.data) {
      dispatch(designActions.setCompanyInfo(companyInfo.data));
      dispatch(designActions.setDirtyCompanyInfo(companyInfo.data));
      setTimeout(() => dispatch(designActions.setInitInfo(true)));
    }
  }, [companyInfo.data]);

  useEffect(() => {
    if (!isFetching && !isError && designSchema && userId) {
      dispatch(designActions.setDesignScheme(designSchema));
      dispatch(designActions.setPreviewImagesLink(initImages));
      dispatch(designActions.setCurrentImage(initImages));
    }
  }, [isFetching, userId]);
}
