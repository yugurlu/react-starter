import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "../store/reducers/cartReducer";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
