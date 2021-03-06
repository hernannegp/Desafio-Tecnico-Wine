import React, { useState, useEffect, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import { iResponse } from '../interfaces/index'
import { setProducts } from '../Redux/slices/productSlice'
import ProductCard from './ProductCard'
import FilterPrices from '../utilities/FilterPrices'

const Products: React.FC = () => {
  const [foundItems, setFoundItems] = useState<number>(0)

  const dispatch = useDispatch()

  const fetchApi = useCallback(async () => {
    await axios.get<iResponse>('https://wine-back-test.herokuapp.com/products')
      .then((res) => {
        dispatch(setProducts(res.data.items))
        setFoundItems(res.data.totalItems)
      })
  }, [setProducts])

  useEffect(() => {
    fetchApi()
    localStorage.setItem('cartItems', JSON.stringify([]))
  }, [])

  return (
    <div>
      <FilterPrices itemsLength={foundItems} />
      <ProductCard />
    </div>
  )
}
export default Products
