import React from 'react'
import { selectProduct } from '../Redux/slices/productSlice'
import { useSelector } from 'react-redux'
import { iList } from '../interfaces'

interface props {
  id: number;
}

const ButtonProduct: React.FC<props> = (props) => {
  const { products } = useSelector(selectProduct)
  const addToCart = (id: number) => {
    const product = products.find((item: iList) => item.id === id)
    const storageItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
    const newProducts = [...storageItems, product]
    localStorage.setItem('cartItems', JSON.stringify(newProducts))
  }

  return (
    <button onClick={() => addToCart(props.id)} className='buttonAdd'>ADICIONAR</button>
  )
}

export default ButtonProduct
