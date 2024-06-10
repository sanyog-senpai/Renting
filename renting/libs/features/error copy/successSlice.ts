import { createSlice } from '@reduxjs/toolkit'

export interface successSlice {
   items: string[]
}

const initialState: successSlice = {
   items: [],
};

export const successSlice = createSlice({
   name: 'success',
   initialState,
   reducers: {
      message: (state, action) => {
         state.items.push(action.payload)
      }
   }
})

// Action creators are generated for each case reducer function
export const { message } = successSlice.actions

export default successSlice.reducer