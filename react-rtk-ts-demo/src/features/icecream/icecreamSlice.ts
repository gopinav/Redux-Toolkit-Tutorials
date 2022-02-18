import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ordered as cakeOrdered } from '../cake/cakeSlice'

type InitialState = {
  numOfIcecreams: number
}

const initialState: InitialState = {
  numOfIcecreams: 10
}

const icecreamSlice = createSlice({
  name: 'icecream',
  initialState,
  reducers: {
    ordered: state => {
      state.numOfIcecreams--
    },
    restocked: (state, action: PayloadAction<number>) => {
      state.numOfIcecreams += action.payload
    }
  },
  extraReducers: builder => {
    builder.addCase(cakeOrdered, state => {
      state.numOfIcecreams--
    })
  }
})

export default icecreamSlice.reducer
export const { ordered, restocked } = icecreamSlice.actions
