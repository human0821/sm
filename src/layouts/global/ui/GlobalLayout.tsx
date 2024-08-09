import { AnimatePresence } from "framer-motion";
import { Navigate, useLocation, useOutlet } from "react-router-dom";

import Routes from "@/app/routes/consts/routes";
import store from "@/app/store";
import { motionFade } from "@/shared/consts/motion";
import { ModalGlobalWidget } from "@/widgets/modal/global";

import { GlobalLayoutWrapper } from "./GlobalLayout.styled";

export function GlobalLayout() {
  const location = useLocation();
  const { user } = store.getState().user;

  if (location.pathname === "/") {
    return <Navigate to={user ? Routes.DASHBOARD_PAGE : Routes.AUTH_LOGIN_PAGE} />;
  } else {
    const currentOutlet = useOutlet();

    return (
      <>
        <AnimatePresence mode={"wait"}>
          <GlobalLayoutWrapper key={location.pathname.split("/")[1]} {...motionFade}>
            {currentOutlet}
          </GlobalLayoutWrapper>
        </AnimatePresence>
        <ModalGlobalWidget />
      </>
    );
  }
}
