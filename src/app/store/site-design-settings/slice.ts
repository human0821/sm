import { createSlice } from "@reduxjs/toolkit";

import { Colors } from "@/app/styles";
import LocalStorage from "@/shared/consts/localStorage";

import { logout } from "../user/slice";

export const designSlice = createSlice({
  name: "design",
  initialState: {
    isPreview: false,
    isDirty: false,
    isInitInfo: false,
    isResetForm: false,
    userSchema: {
      colorSchema: localStorage.getItem(LocalStorage.DESIGN_SCHEMA) || Colors.BLACK_MAIN,
      logo: null,
      header: null,
      side: null,
      id: 0,
    } as ApiPartnersResponse.DesignSchema,

    selectedColor: Colors.BLACK_MAIN as string,

    previewImagesLink: {
      logo: "",
      header: "",
      side: "",
    } as PreviewImagesLink,

    currentImagesLink: {
      logo: "",
      header: "",
      side: "",
    } as PreviewImagesLink,

    previewCompanyInfo: {
      email: "",
      phoneNumber: "",
      description: "",
      name: "",
      vkLink: "",
      okLink: "",
      telegramLink: "",
    } as LayoutMenuFooterEntity,

    dirtyCompanyInfo: {
      email: "",
      phoneNumber: "",
      description: "",
      name: "",
      vkLink: "",
      okLink: "",
      telegramLink: "",
    } as LayoutMenuFooterEntity,
  },
  reducers: {
    setEditMode: (state, { payload }: P<boolean>) => {
      state.isPreview = payload;

      const { classList } = document.body;
      payload ? classList.add("jivo-off") : classList.remove("jivo-off");
    },

    setColorScheme: (state, { payload }: P<string>) => {
      state.selectedColor = payload;
      state.isDirty = true;
    },
    setDesignScheme: (state, { payload }: P<Partial<ApiPartnersResponse.DesignSchema>>) => {
      Object.assign(state.userSchema, payload);
      if (payload.colorSchema) {
        localStorage.setItem(LocalStorage.DESIGN_SCHEMA, payload.colorSchema);
        state.selectedColor = payload.colorSchema;
      }
    },
    setPreviewImagesLink: (state, { payload }: P<PreviewImagesLink>) => {
      Object.assign(state.previewImagesLink, payload);
    },
    setCurrentImage: (state, { payload }: P<PreviewImagesLink>) => {
      Object.assign(state.currentImagesLink, payload);
    },

    setCompanyInfo: (state, { payload }: P<Partial<LayoutMenuFooterEntity>>) => {
      Object.assign(state.previewCompanyInfo, payload);
    },
    setDirtyCompanyInfo: (state, { payload }: P<Partial<LayoutMenuFooterEntity>>) => {
      Object.assign(state.dirtyCompanyInfo, payload);
    },
    setInitInfo: (state, { payload }: P<boolean>) => {
      state.isInitInfo = payload;
    },
    setResetForm: (state, { payload }: P<boolean>) => {
      state.isResetForm = payload;
    },
    setDirty: (state, { payload }: P<boolean>) => {
      state.isDirty = payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state) => {
      state.isResetForm = false;
      state.isInitInfo = false;
    });
  },
});

export default designSlice.reducer;
export const designActions = designSlice.actions;
