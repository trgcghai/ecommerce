import { createSlice } from "@reduxjs/toolkit";
import { storeData } from "../../assets/data/dummyData";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    filterProducts:
      JSON.parse(sessionStorage.getItem("filteredData")) || storeData,
  },
  reducers: {
    filterProducts(state, action) {
      try {
        const filter = storeData.filter(
          (product) => product.type === action.payload
        );
        state.filterProducts = filter;
        console.log("filter", filter);
        const saveState = JSON.stringify(filter);
        sessionStorage.setItem("filteredData", saveState);
      } catch (err) {
        return err;
      }
    },
  },
});

export const { filterProducts } = productsSlice.actions;
export default productsSlice.reducer;
