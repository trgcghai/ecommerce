import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    filterProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
    singleProduct:
      JSON.parse(sessionStorage.getItem("oneProduct")) || storeData,
    error: false,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filterProducts = filter;
        state.error = false;
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", saveState);
      } catch (err) {
        return err;
      }
    },
    singleProduct(state, action) {
      try {
        const oneProduct = storeData.filter(
          (product) => product.id === action.payload
        );
        state.singleProduct = oneProduct;
        const saveState = JSON.stringify(oneProduct);
        sessionStorage.setItem("oneProduct", saveState);
      } catch (err) {
        return err;
      }
    },
    filterGender(state, action) {
      try {
        const gender = state.filterProducts.filter(
          (product) => product.gender === action.payload
        );
        state.error = false;
        state.filterProducts = gender;
        const oneGenderType = gender.length > 0;
        if (oneGenderType) {
          state.error = false;
          const saveState = JSON.stringify(gender);
          sessionStorage.setItem("filteredData", saveState);
        } else {
          state.error = true;
          state.filterProducts = [];
        }
      } catch (err) {
        return err;
      }
    },
    sortByPrice(state) {
      try {
        const price = state.filterProducts.sort((a, b) =>
          a.price > b.price ? -1 : 1
        );
        state.filterProducts = price;
        let count = price.length;
        if (count > 1) {
          state.error = false;
          state.filterProducts = price;
          const saveState = JSON.stringify(price);
          sessionStorage.setItem("filteredData", saveState);
        } else {
          state.error = true;
          state.filterProducts = [];
        }
      } catch (err) {
        return err;
      }
    },
    filterColor(state, action) {
      try {
        const color = state.filterProducts.filter((product) =>
          product.color.includes(action.payload)
        );
        state.error = false;
        state.filterProducts = color;
        const oneColorType = color.length > 0;
        if (oneColorType) {
          state.error = false;
          const saveState = JSON.stringify(color);
          sessionStorage.setItem("filteredData", saveState);
        } else {
          state.error = true;
          state.filterProducts = [];
        }
      } catch (err) {
        return err;
      }
    },
    filterSize(state, action) {
      try {
        const size = state.filterProducts.filter((product) =>
          product.size.includes(action.payload)
        );
        state.error = false;
        state.filterProducts = size;
        const oneSizeType = size.length > 0;
        if (oneSizeType) {
          state.error = false;
          const saveState = JSON.stringify(size);
          sessionStorage.setItem("filteredData", saveState);
        } else {
          state.error = true;
          state.filterProducts = [];
        }
      } catch (err) {
        return err;
      }
    },
  },
});

export const {
  filterProducts,
  singleProduct,
  filterGender,
  sortByPrice,
  filterColor,
  filterSize,
} = productsSlice.actions;
export default productsSlice.reducer;
