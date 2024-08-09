import Routes from "@/app/routes/consts/routes";
import { BUNNER_MANAGMENT, SYSTEM_ADMINISTRATION, BUNNER_CREATE } from "@/shared/consts/content";
import { Breadcrumbs, BreadcrumbsLink } from "@/shared/ui/Breadcrumbs";
import { BannerForm } from "@/widgets/administration/banner-form";

export function BannerCreatePage() {
  const breadcrumbs = [
    <BreadcrumbsLink underline="hover" key="2" href={Routes.SYSTEM_PAGE}>
      {SYSTEM_ADMINISTRATION}
    </BreadcrumbsLink>,
    <BreadcrumbsLink underline="hover" key="3" href={Routes.SYSTEM_BANNERS_PAGE}>
      {BUNNER_MANAGMENT}
    </BreadcrumbsLink>,
    BUNNER_CREATE,
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbs} />
      <BannerForm />
    </>
  );
}
