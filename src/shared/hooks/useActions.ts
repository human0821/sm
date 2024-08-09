import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";

import { useAppDispatch } from "@/app/store";
import actions from "@/app/store/rootActions";

export const useActions = () => {
  const dispatch = useAppDispatch();
  return useMemo(() => bindActionCreators(actions, dispatch), [dispatch]);
};
