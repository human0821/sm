import type { EmployeeSmPartnerSchema } from "@/app/api/apiGenerator/common/employeesApi";

import { motion } from "framer-motion";
import { useEffect, useState, useContext } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { Helmet } from "react-helmet-async";

import Routes from "@/app/routes/consts/routes";
import { FAQ } from "@/shared/consts/content";
import { motionFade } from "@/shared/consts/motion";
import { Breadcrumbs, BreadcrumbsLink } from "@/shared/ui/Breadcrumbs";
import { Loader } from "@/shared/ui/Button/Loading/ButtonLoading.styled";
import { RoleContext } from "@/shared/utils/rolesHelpers";
import { FaqForm } from "@/widgets/faq";

import { LoaderWrapper } from "./FaqDetailPage.styled";

export const FaqDetailPage = () => {
  const isFetching = false;
  const foundRoles = useContext(RoleContext);
  const { showBoundary } = useErrorBoundary();
  const [data, setData] = useState<EmployeeSmPartnerSchema>();

  const breadcrumbs = [
    <BreadcrumbsLink underline="hover" key="2" href={Routes.FAQ_PAGE}>
      {FAQ}
    </BreadcrumbsLink>,
    "Редактирование вопроса",
  ];

  useEffect(() => {
    if (!foundRoles?.isContentManagerSM) {
      showBoundary({ code: 403 });
    }
  }, [foundRoles]);

  return (
    <>
      <Helmet>Редактирование вопроса</Helmet>
      {isFetching ? (
        <motion.div {...motionFade} key="loader">
          <LoaderWrapper>
            <Loader />
          </LoaderWrapper>
        </motion.div>
      ) : (
        <motion.div {...motionFade} key="content">
          <Breadcrumbs items={breadcrumbs} />
          <FaqForm data={data} />
        </motion.div>
      )}
    </>
  );
};
