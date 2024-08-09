import { useEffect, useContext } from "react";
import { useErrorBoundary } from "react-error-boundary";
import { Helmet } from "react-helmet-async";

import Routes from "@/app/routes/consts/routes";
import { FAQ } from "@/shared/consts/content";
import { Breadcrumbs, BreadcrumbsLink } from "@/shared/ui/Breadcrumbs";
import { RoleContext } from "@/shared/utils/rolesHelpers";
import { FaqForm } from "@/widgets/faq";

export const FaqCreatePage = () => {
  const foundRoles = useContext(RoleContext);
  const { showBoundary } = useErrorBoundary();

  const breadcrumbs = [
    <BreadcrumbsLink underline="hover" key="2" href={Routes.FAQ_PAGE}>
      {FAQ}
    </BreadcrumbsLink>,
    "Добавить вопрос",
  ];

  useEffect(() => {
    if (!foundRoles?.isContentManagerSM) {
      showBoundary({ code: 403 });
    }
  }, [foundRoles]);

  return (
    <>
      <Helmet>Добавить вопрос</Helmet>
      <Breadcrumbs items={breadcrumbs} />
      <FaqForm />
    </>
  );
};
