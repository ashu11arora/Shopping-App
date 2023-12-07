import { configureStore } from '@reduxjs/toolkit'
import { CartSlice } from "./Slices/CartSlice"

export const store = configureStore({
  reducer: {
    // key-value pair
    cart: CartSlice.reducer,
  },
})