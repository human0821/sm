import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector, type TypedUseSelectorHook } from "react-redux";

import appReducer from "./app/slice";
import commentReducer from "./comment/slice";
import finResultActions from "./fin-result/slice";
import layoutReducer from "./layout/slice";
import designReducer from "./site-design-settings/slice";
import surveyReducer from "./survey/slice";
import userReducer from "./user/slice";
import { apiSlice } from "../api";
import { apiDadataSlice } from "../api/dadata/api";

const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    [apiDadataSlice.reducerPath]: apiDadataSlice.reducer,
    // Add your reducers here
    app: appReducer,
    user: userReducer,
    layout: layoutReducer,
    comment: commentReducer,
    survey: surveyReducer,
    design: designReducer,
    finResult: finResultActions,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(apiSlice.middleware).concat(apiDadataSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
