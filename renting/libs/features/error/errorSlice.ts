import { createSlice } from '@reduxjs/toolkit'

export interface errorState {
   items: string[]
}

const initialState: errorState = {
   items: [],
};

export const errorSlice = createSlice({
   name: 'error',
   initialState,
   reducers: {
      message: (state, action) => {
         state.items.push(action.payload)
      }
   }
})

// Action creators are generated for each case reducer function
export const { message } = errorSlice.actions

export default errorSlice.reducer