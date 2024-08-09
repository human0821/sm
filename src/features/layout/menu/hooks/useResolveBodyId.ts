import { useEffect } from "react";

import { useLayoutMenuState } from "./useLayoutMenuState";

export const useResolveBodyId = () => {
  const { showLayoutMenu } = useLayoutMenuState();

  useEffect(() => {
    document.body.id = showLayoutMenu ? "menu-opened" : "";
  }, [showLayoutMenu]);
};
