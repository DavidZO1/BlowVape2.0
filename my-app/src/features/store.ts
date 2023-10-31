import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/authSlice";
import {ToolkitStore} from "@reduxjs/toolkit/dist/configureStore";
import productSlice from "./slices/productSlice";
import cartSlice from "./slices/cartSlice";

export const store:ToolkitStore<{auth: any}> = configureStore({
  reducer:{
    auth: authSlice,
    product: productSlice,
    cart: cartSlice
  }
})