import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slices/sliderSlice";
import productsReducer from "../features/slices/productsSlice";

export default configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsReducer,
  },
});
