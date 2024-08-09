import { AnimatePresence } from "framer-motion";
import { ErrorBoundary } from "react-error-boundary";
import { Navigate, useLocation, useOutlet } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";
import store from "@/app/store";
import { motionFadeScale } from "@/shared/consts/motion";
import { fallbackRender } from "@/shared/utils/fallbackRender";

import { Background, Wrapper, Logo, Main } from "./AuthLayout.styled";

export function AuthLayout() {
  const { user } = store.getState().user;
  const location = useLocation();
  const currentOutlet = useOutlet();

  return (
    <>
      {user ? (
        <Navigate to={user.lastLink || Routes.DASHBOARD_PAGE} />
      ) : (
        <Main>
          <AnimatePresence mode={"wait"}>
            <ErrorBoundary key={location.pathname} fallbackRender={fallbackRender.bind(true)}>
              <Background />
              <Wrapper {...motionFadeScale}>{currentOutlet}</Wrapper>
              <Logo />
            </ErrorBoundary>
          </AnimatePresence>
        </Main>
      )}
    </>
  );
}
