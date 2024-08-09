import { useMediaQuery, useTheme } from "@mui/material";
import { AnimatePresence } from "framer-motion";
import { useEffect, useMemo } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";
import { useAppSelector, type RootState } from "@/app/store";
import { Breakpoints } from "@/app/styles/breakpoints";
import { useLayoutMenuState } from "@/features/layout/menu";
import { motionFade } from "@/shared/consts/motion";
import { useIsRole } from "@/shared/hooks/useIsRole";
import { PreviewButton } from "@/shared/ui/PreviewButton/PreviewButton";
import { fallbackRender } from "@/shared/utils/fallbackRender";
import { RoleContext } from "@/shared/utils/rolesHelpers";
import { useInitialDesignScheme } from "@/widgets/account/design-settings/hooks/useInitialImages";
import { FsLightboxWidget } from "@/widgets/layout/fs-lightbox";
import { LayoutHeaderWidget } from "@/widgets/layout/header";
import { LayoutMenuWidget } from "@/widgets/layout/menu";
import { LayoutNewsWidget, NewsWidgetWidths } from "@/widgets/layout/news";
import { ModalGlobalWidget } from "@/widgets/modal/global";

import {
  LayoutMenuMobile,
  MainLayoutContent,
  MainLayoutHeader,
  MainLayoutMain,
  MainLayoutMenu,
  MainLayoutMenuBackdrop,
  MainLayoutNews,
  MainLayoutWrapper,
} from "../../main/ui/MainLayout.styled";

export function MainLayout({ children }: { children?: React.ReactNode }) {
  const user = useSelector((state: RootState) => state.user.user);
  const foundRoles = useIsRole(user?.roles || []);

  const location = useLocation();
  const { toggleLayoutMenu } = useLayoutMenuState();

  const theme = useTheme();
  const isDashboard = location.pathname === Routes.DASHBOARD_PAGE;
  const isTabletL = useMediaQuery(`(min-width:${Breakpoints.TABLET_L})`);
  const isDesktop = useMediaQuery(`(min-width:${Breakpoints.DESKTOP})`);
  const screenXl = useMediaQuery(theme.breakpoints.up("xl"));
  const navigate = useNavigate();

  const showMainMenu = useSelector((state: RootState) => state.layout.showMenu);
  const showMainNews = useSelector((state: RootState) => state.layout.showNews);

  const getNewsWidth = useMemo(() => {
    if (screenXl) {
      return showMainNews ? NewsWidgetWidths.XL_FULL : NewsWidgetWidths.XL_SHORT;
    }

    return showMainNews ? NewsWidgetWidths.LG_FULL : NewsWidgetWidths.LG_SHORT;
  }, [showMainNews, screenXl]);

  const isEditDesign = useAppSelector((state) => state.design.isPreview);
  useInitialDesignScheme(user?.id || "");

  useEffect(() => {
    if (location.pathname === Routes.MAIN_PAGE && user?.id) {
      navigate(Routes.DASHBOARD_PAGE);
    }
  }, []);

  return (
    <>
      {user ? (
        <>
          <MainLayoutWrapper $isEditDesign={isEditDesign}>
            <ErrorBoundary fallbackRender={fallbackRender.bind(true)}>
              <MainLayoutHeader>
                <LayoutHeaderWidget isDesktop={isDesktop} />
              </MainLayoutHeader>
              <MainLayoutContent>
                <AnimatePresence initial={false} mode={"wait"}>
                  {showMainMenu && isDesktop && (
                    <MainLayoutMenu initial={{ marginLeft: -266 }} animate={{ marginLeft: 0 }} exit={{ marginLeft: -266 }}>
                      <LayoutMenuWidget />
                    </MainLayoutMenu>
                  )}
                </AnimatePresence>
                <MainLayoutMain>
                  <ErrorBoundary key={location.pathname} fallbackRender={fallbackRender}>
                    <RoleContext.Provider value={foundRoles}>
                      <Outlet />
                      {children}
                      {!isTabletL && isDashboard && <LayoutNewsWidget isMobile={true} />}
                    </RoleContext.Provider>
                  </ErrorBoundary>
                </MainLayoutMain>
                <AnimatePresence initial={false} mode={"wait"}>
                  {isTabletL && isDashboard && (
                    <MainLayoutNews
                      initial={{ width: 0 }}
                      animate={{ width: getNewsWidth }}
                      exit={{ width: 0 }}
                      isDashboard={isDashboard}>
                      <LayoutNewsWidget />
                    </MainLayoutNews>
                  )}
                </AnimatePresence>
                <AnimatePresence>
                  {!isDesktop && showMainMenu && (
                    <LayoutMenuMobile {...motionFade}>
                      <MainLayoutMenuBackdrop onClick={() => toggleLayoutMenu()} />
                      <LayoutMenuWidget isMobile={true} isDesktop={isDesktop} />
                    </LayoutMenuMobile>
                  )}
                </AnimatePresence>
              </MainLayoutContent>
              <ModalGlobalWidget />
            </ErrorBoundary>
            <FsLightboxWidget />
            {isEditDesign && <PreviewButton />}
          </MainLayoutWrapper>
        </>
      ) : (
        <Navigate to={Routes.AUTH_LOGIN_PAGE} />
      )}
    </>
  );
}
