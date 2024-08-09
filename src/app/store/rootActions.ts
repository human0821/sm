import { commentSlice } from "./comment/slice";
import { finResultSlice } from "./fin-result/slice";
import { designSlice } from "./site-design-settings/slice";
import { surveySlice } from "./survey/slice";

/* your actions here */
export default {
  ...commentSlice.actions,
  ...surveySlice.actions,
  ...designSlice.actions,
  ...finResultSlice.actions,
};
