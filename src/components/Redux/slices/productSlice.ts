import { createSlice } from '@reduxjs/toolkit'
import { iList } from '../../interfaces'
import { RootState } from '../store'

export const slice = createSlice({
  name: 'product',
  initialState: {
    products: [] as iList[],
    initialSlice: 0 as number,
    finalSlice: 9 as number
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setIntialSlice: (state, action) => {
      state.initialSlice = action.payload
    },
    setFinalSlice: (state, action) => {
      state.finalSlice = action.payload
    }
  }
})

export const selectProducts = (state: RootState) => state.product

export const { setProducts, setFinalSlice, setIntialSlice } = slice.actions

export const selectProduct = (state: RootState) => state.product

export default slice.reducer
