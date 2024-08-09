import { createSlice } from "@reduxjs/toolkit";

import { menuApi } from "@/app/api/menu/api";
import LocalStorage from "@/shared/consts/localStorage";

const initialState: StoreLayout.State = {
  showMenu: (localStorage.getItem(LocalStorage.ADMIN_MENU_STATE) || "true") === "true",
  showNews: (localStorage.getItem(LocalStorage.ADMIN_NEWS_STATE) || "true") === "true",
  showBanner:
    !localStorage.getItem(LocalStorage.ADMIN_BANNER_STATE) ||
    localStorage.getItem(LocalStorage.ADMIN_BANNER_STATE) === "true",
  menu: [],
  lightbox: { toggler: false, slides: [] },
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setShowBanner(state, { payload }: { payload: boolean }) {
      state.showBanner = payload;
      localStorage.setItem(LocalStorage.ADMIN_BANNER_STATE, String(payload));
    },
    setShowMenu(state, { payload }: { payload: boolean }) {
      state.showMenu = payload;
      localStorage.setItem(LocalStorage.ADMIN_MENU_STATE, String(payload));
    },
    setShowNews(state, { payload }: { payload: boolean }) {
      state.showNews = payload;
      localStorage.setItem(LocalStorage.ADMIN_NEWS_STATE, String(payload));
    },
    setLightbox(state, { payload }: { payload: Pick<StoreLayout.Lightbox, "slides"> }) {
      state.lightbox = {
        toggler: !state.lightbox.toggler,
        slides: payload.slides,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(menuApi.endpoints.getMenu.matchFulfilled, (state, { payload }: { payload: StoreLayout.Menu[] }) => {
      state.menu = payload;
    });
  },
});

export const { setShowMenu, setShowNews, setShowBanner, setLightbox } = layoutSlice.actions;

export default layoutSlice.reducer;
