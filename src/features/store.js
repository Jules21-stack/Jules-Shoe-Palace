import { configureStore } from "@reduxjs/toolkit";
import cartSlice, { cartMiddleware } from "./cart/CartSlice";

export const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cartMiddleware),
});
