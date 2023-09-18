

import { createSlice } from '@reduxjs/toolkit'

export const bookSlice = createSlice({
  name: 'books',
  initialState: {
    value: {},
  },
  reducers: {
    setBook: (state, action)=>{
        state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setBook } = bookSlice.actions

export default bookSlice.reducer

