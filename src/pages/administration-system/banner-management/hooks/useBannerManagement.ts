import type { PageBannerSchema } from "@/app/api/apiGenerator/admin/bannersAdminApi";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useSearchParams } from "react-router-dom";

import { bannersAdminApi } from "@/app/api/apiGenerator/admin";

export const useBannerManagement = () => {
  const search = useSearchParams()[0] || "";
  const [banners, setBanners] = useState<PageBannerSchema>();
  const getBanners = bannersAdminApi.useGetBannersAdminQuery({
    search: search.get("search") || undefined,
    page: Number(search.get("page")) || 1,
    created: search.get("created") || undefined, // @ts-ignore
    active: search.get("active") ? search.get("active") : undefined,
    size: 6,
  });
  const { showBoundary } = useErrorBoundary();

  useEffect(() => {
    if (getBanners.data) {
      setBanners(getBanners.data);
    }
  }, [getBanners.data]);

  useEffect(() => {
    if (getBanners.error) {
      showBoundary({ code: (getBanners.error as FetchBaseQueryError).status || 500 });
    }
  }, [getBanners.error]);

  return { banners, isLoading: getBanners.isFetching };
};
