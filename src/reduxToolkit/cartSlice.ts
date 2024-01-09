import { createSlice } from "@reduxjs/toolkit";

const cartItems = [{}];

export const cartSlice = createSlice({
  name: "carts",
  initialState: { cartItems },
  reducers: {
    addToCart: (state: any, action: any) => {
      state.cartItems = [...state.cartItems, action.payload];
    },
    removeToCart: (state: any, action: any) => {
      state.cartItems = state.cartItems.filter(
        (item: any) => item.id !== action.payload
      );
    },
    clearCart: (state: any) => {
      state.cartItems = [];
    },
  },
});

export default cartSlice.reducer;
