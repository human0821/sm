import { createSlice } from "@reduxjs/toolkit";

const initialState: CommentSlice.State = {
  activeEditingId: null,
  activeReplyId: null,
};

export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    setActiveEditingId(state, { payload }: P<number | null>) {
      state.activeEditingId = payload;
    },
    setActiveReplyId(state, { payload }: P<number | null>) {
      state.activeReplyId = payload;
    },
  },
});

export const { setActiveEditingId, setActiveReplyId } = commentSlice.actions;

export default commentSlice.reducer;
