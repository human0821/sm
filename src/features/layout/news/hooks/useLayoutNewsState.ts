import type { RootState } from "@/app/store";

import { useSelector } from "react-redux";

import store from "@/app/store";
import { setShowNews } from "@/app/store/layout/slice";

export function useLayoutNewsState() {
  const showLayoutNews = useSelector((state: RootState) => state.layout.showNews);

  const toggleLayoutNews = () => {
    store.dispatch(setShowNews(!showLayoutNews));
  };

  return { showLayoutNews, toggleLayoutNews };
}
