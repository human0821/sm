import type { BannerSchema } from "@/app/api/apiGenerator/admin/bannersAdminApi";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";

import { bannersAdminApi } from "@/app/api/apiGenerator/admin";
import Routes from "@/app/routes/consts/routes";
import { BUNNER_MANAGMENT, SYSTEM_ADMINISTRATION, BUNNER_EDIT } from "@/shared/consts/content";
import { motionFade } from "@/shared/consts/motion";
import { Breadcrumbs, BreadcrumbsLink } from "@/shared/ui/Breadcrumbs";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";
import { BannerForm } from "@/widgets/administration/banner-form";

import { LoaderWrapper } from "./BannerDetailPage.styled";

export function BannerDetailPage() {
  const { id } = useParams();
  const getBanner = bannersAdminApi.useGetBannerAdminQuery({ bannerId: Number(id) }, { refetchOnMountOrArgChange: true });
  const [data, setData] = useState<BannerSchema>();
  const { showBoundary } = useErrorBoundary();
  const breadcrumbs = [
    <BreadcrumbsLink underline="hover" key="2" href={Routes.SYSTEM_PAGE}>
      {SYSTEM_ADMINISTRATION}
    </BreadcrumbsLink>,
    <BreadcrumbsLink underline="hover" key="3" href={Routes.SYSTEM_BANNERS_PAGE}>
      {BUNNER_MANAGMENT}
    </BreadcrumbsLink>,
    BUNNER_EDIT,
  ];

  useEffect(() => {
    if (getBanner.data) {
      setData(getBanner.data);
    }
    if (getBanner.error) {
      showBoundary({ code: (getBanner.error as FetchBaseQueryError).status || 500 });
    }
  }, [getBanner]);

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {getBanner.isFetching ? (
        <motion.div {...motionFade} key="loader">
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        </motion.div>
      ) : (
        <motion.div {...motionFade} key="content">
          <BannerForm data={data} />
        </motion.div>
      )}
    </>
  );
}
