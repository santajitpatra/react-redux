import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import todoreducer from "./slices/todo";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    todo: todoreducer,
  },
  devTools:true,
});
