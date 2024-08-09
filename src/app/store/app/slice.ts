import { createSlice } from "@reduxjs/toolkit";

const initialState: StoreApp.State = {
  modal: { show: false },
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setModal(state, { payload }: { payload: StoreApp.Modal }) {
      state.modal = payload;
    },
  },
});

export const { setModal } = appSlice.actions;

export default appSlice.reducer;
