import { configureStore } from "@reduxjs/toolkit";
import sliderReducer from "../features/slices/sliderSlice";
import productsReducer from "../features/slices/productsSlice";
import cardReducer from "../features/slices/cartSlice";
import authReducer from "../features/slices/authSlices";

export default configureStore({
  reducer: {
    slider: sliderReducer,
    products: productsReducer,
    cart: cardReducer,
    user: authReducer,
  },
});
