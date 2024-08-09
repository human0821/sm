import type { CaseSegmentPrivilegesViewSchema } from "@/app/api/apiGenerator/common/casesApi";
import type { FetchBaseQueryError } from "@reduxjs/toolkit/query";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { useParams } from "react-router-dom";

import { casesApi } from "@/app/api/apiGenerator/common";
import Routes from "@/app/routes/consts/routes";
import { SYSTEM_ADMINISTRATION } from "@/shared/consts/content";
import { motionFade } from "@/shared/consts/motion";
import { Breadcrumbs, BreadcrumbsLink } from "@/shared/ui/Breadcrumbs";
import { Loader } from "@/shared/ui/Button";
import { CaseManagmentForm } from "@/widgets/administration/case-managment-form";

import { LoaderWrapper } from "./CaseManagmentDetailPage.styled";

export const CaseManagmentDetailPage = () => {
  const { id } = useParams();
  const getPrivileges = casesApi.useGetPrivilegesQuery({ caseId: String(id) }, { refetchOnMountOrArgChange: true });
  const [data, setData] = useState<CaseSegmentPrivilegesViewSchema>();
  const { showBoundary } = useErrorBoundary();
  const breadcrumbs = [
    <BreadcrumbsLink underline="hover" key="2" href={Routes.SYSTEM_PAGE}>
      {SYSTEM_ADMINISTRATION}
    </BreadcrumbsLink>,
    <BreadcrumbsLink underline="hover" key="3" href={Routes.SYSTEM_CASES_PAGE}>
      Управление кейсами
    </BreadcrumbsLink>,
    "Редактирование кейса",
  ];

  useEffect(() => {
    if (getPrivileges.data) {
      setData(getPrivileges.data);
    }
    if (getPrivileges.error) {
      showBoundary({ code: (getPrivileges.error as FetchBaseQueryError).status || 500 });
    }
  }, [getPrivileges]);

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      {getPrivileges.isFetching ? (
        <motion.div {...motionFade} key="loader">
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        </motion.div>
      ) : (
        <motion.div {...motionFade} key="content">
          {data && <CaseManagmentForm data={data} />}
        </motion.div>
      )}
    </>
  );
};
