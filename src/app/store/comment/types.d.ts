declare namespace CommentSlice {
  interface State {
    activeEditingId: null | number;
    activeReplyId: null | number;
  }
}
interface P<T> {
  payload: T;
}
