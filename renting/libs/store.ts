import { configureStore } from '@reduxjs/toolkit';
import wishListReducer from "./features/wishlist/wishListSlice"
import errorReducer from "./features/error/errorSlice"

export const makeStore = () => {
   return configureStore({
      reducer: {
         wishlist: wishListReducer,
         error: errorReducer,
      }
   })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']