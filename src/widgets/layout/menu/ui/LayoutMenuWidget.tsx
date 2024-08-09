import { useSnackbar } from "notistack";
import { useErrorBoundary } from "react-error-boundary";
import { useDispatch } from "react-redux";

import { useGetMenuQuery } from "@/app/api/menu/api";
import { useGetMainInfoQuery } from "@/app/api/partners/api";
import Routes from "@/app/routes/consts/routes";
import { useAppSelector } from "@/app/store";
import { logout } from "@/app/store/user/slice";
import { ErrorIcon } from "@/assets/icons";
import {
  LayoutHeaderLogoEntityLink,
  LayoutHeaderLogoEntityLogo,
} from "@/entities/layout/header/logo/ui/LayoutHeaderLogoEntity.styled";
import { LayoutMenuFooterEntity, LayoutMenuLinkEntity } from "@/entities/layout/menu";
import { useLayoutMenuState } from "@/features/layout/menu";
import { useProfileAction } from "@/features/profile/hooks/useProfileAction";
import ValidationErrors from "@/shared/consts/validationErrors";
import { Variants } from "@/shared/consts/variants";
import { checkFetchBaseQueryErrorStatus } from "@/shared/utils/checkFetchBaseQueryErrorStatus";

import {
  LayoutMenuMobileClose,
  LayoutMenuMobileLogo,
  LayoutMenuMobileLogout,
  LayoutMenuWidgetMenuList,
  LayoutMenuWidgetMobileHeader,
  LayoutMenuWidgetWrapper,
  LogoutIcon,
} from "./LayoutMenuWidget.styled";

export function LayoutMenuWidget({ isMobile, isDesktop }: { isMobile?: boolean; isDesktop?: boolean }) {
  const { data: menu, error: menuError } = useGetMenuQuery();
  const { data: footer } = useGetMainInfoQuery();
  const { showBoundary } = useErrorBoundary();
  const dispatch = useDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const { toggleLayoutMenu } = useLayoutMenuState();
  const profileActions = useProfileAction();
  const bgImage = useAppSelector(({ design }) => (design.isPreview ? design.previewImagesLink : design.currentImagesLink));
  const isPreview = useAppSelector(({ design }) => design.isPreview);
  const previewInfo = useAppSelector(({ design }) => design.dirtyCompanyInfo);
  const footerInfo = isPreview ? previewInfo : footer;

  const menuEntityClick = () => {
    if (isDesktop === false) {
      toggleLayoutMenu();
    }
  };

  let menuList;
  if (menu) {
    menuList = menu
      .filter((item) => item.status)
      .map((item) => <LayoutMenuLinkEntity key={item.id} menu={item} onClick={menuEntityClick} />);
  } else if (menuError) {
    if (checkFetchBaseQueryErrorStatus(menuError, 500, true)) {
      showBoundary({ code: 500 });
    } else {
      dispatch(logout());
      enqueueSnackbar(ValidationErrors.REAUTH_ERROR, { variant: Variants.ERROR });
    }
  }

  return (
    <LayoutMenuWidgetWrapper isMobile={isMobile} bgImage={bgImage.side || ""}>
      {isMobile && (
        <LayoutMenuWidgetMobileHeader>
          <LayoutMenuMobileClose onClick={toggleLayoutMenu}>
            <ErrorIcon />
          </LayoutMenuMobileClose>
          <LayoutMenuMobileLogo>
            <LayoutHeaderLogoEntityLink to={Routes.DASHBOARD_PAGE}>
              <LayoutHeaderLogoEntityLogo src={bgImage.logo || "/images/general/logo.png"} alt="logo" />
            </LayoutHeaderLogoEntityLink>
          </LayoutMenuMobileLogo>
          <LayoutMenuMobileLogout onClick={profileActions.logout}>
            <LogoutIcon />
          </LayoutMenuMobileLogout>
        </LayoutMenuWidgetMobileHeader>
      )}
      <LayoutMenuWidgetMenuList>{menuList}</LayoutMenuWidgetMenuList>
      {footerInfo && Object.entries(footerInfo || {}).some(([k, v]) => v && k !== "id") && (
        <LayoutMenuFooterEntity {...footerInfo} isMobile={isMobile} />
      )}
    </LayoutMenuWidgetWrapper>
  );
}
