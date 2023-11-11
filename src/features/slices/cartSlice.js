import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    amount: 0,
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addToCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cartList.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist) {
          exist.amount++;
          exist.totalPrice += productId.price;
          state.totalAmount++;
          state.totalPrice += productId.price;
        } else {
          state.cartList.push({
            id: productId.id,
            name: productId.name,
            price: productId.price,
            img: productId.img,
            text: productId.text,
            size: productId.size,
            color: productId.color,
            amount: 1,
            totalPrice: productId.price,
          });
          state.totalAmount++;
          state.totalPrice += productId.price;
        }
      } catch (err) {
        return err;
      }
    },
    removeFromCart(state, action) {
      const productId = action.payload;
      try {
        const exist = state.cartList.find(
          (product) =>
            product.id === productId.id &&
            product.size === productId.size &&
            product.color === productId.color
        );
        if (exist.amount === 1) {
          state.totalAmount--;
          state.totalPrice -= productId.price;
          state.cartList = state.cartList.filter(
            (product) =>
              product.id !== productId.id ||
              product.size !== productId.size ||
              product.color !== productId.color
          );
        } else {
          exist.amount--;
          exist.totalPrice -= productId.price;
          state.totalAmount--;
          state.totalPrice -= productId.price;
        }
      } catch (err) {
        return err;
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
