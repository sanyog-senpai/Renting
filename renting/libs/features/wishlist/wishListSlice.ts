import { createSlice } from '@reduxjs/toolkit'

export interface WishlistState {
   items: string[]
}

const initialState: WishlistState = {
   items: [],
};

export const wishListSlice = createSlice({
   name: 'wishList',
   initialState,
   reducers: {
      add: (state, action) => {
         state.items.push(action.payload)
      }
   }
})

// Action creators are generated for each case reducer function
export const { add } = wishListSlice.actions

export default wishListSlice.reducer