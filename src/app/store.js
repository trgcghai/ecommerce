import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slices/sliderSlice";

export default configureStore({
  reducer: {
    slider: sliderReducer,
  },
});
