import type { RootState } from "@/app/store";

import { useSelector } from "react-redux";

import store from "@/app/store";
import { setShowMenu } from "@/app/store/layout/slice";

export function useLayoutMenuState() {
  const showLayoutMenu = useSelector((state: RootState) => state.layout.showMenu);

  const toggleLayoutMenu = () => {
    store.dispatch(setShowMenu(!showLayoutMenu));
  };

  return { showLayoutMenu, toggleLayoutMenu };
}
