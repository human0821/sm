import type { RootState } from "@/app/store";

import { useState } from "react";
import { useSelector } from "react-redux";

import store from "@/app/store";
import { setShowBanner } from "@/app/store/layout/slice";

export function useLayoutBannerState() {
  const [isAnimate, setIsAnimate] = useState(false);
  const showLayoutBanner = useSelector((state: RootState) => state.layout.showBanner);

  const toggleLayoutBanner = () => {
    if (!isAnimate) {
      setIsAnimate(true);
      store.dispatch(setShowBanner(!showLayoutBanner));
      setTimeout(() => {
        setIsAnimate(false);
      }, 500);
    }
  };

  return { showLayoutBanner, toggleLayoutBanner, isAnimate };
}
