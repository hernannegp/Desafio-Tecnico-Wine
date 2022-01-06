import { createSlice } from '@reduxjs/toolkit'
import { iList } from '../../interfaces'
import { RootState } from '../store'

export const slice = createSlice({
  name: 'product',
  initialState: {
    products: [] as iList[]
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    }
  }
})

export const { setProducts } = slice.actions

export const selectProduct = (state: RootState) => state.product

export default slice.reducer
