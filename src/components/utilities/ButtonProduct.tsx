import React, { useState } from 'react'
import { selectProduct } from '../Redux/slices/productSlice'
import { useSelector } from 'react-redux'
import { iList } from '../interfaces'

interface props {
  id: number;
}

const ButtonProduct: React.FC<props> = (props) => {
  const [price, setPrice] = useState<number>(0)

  const { products } = useSelector(selectProduct)
  const addToCart = (id: number) => {
    const product = products.find((item: iList) => item.id === id)
    if (product) {
      setPrice(price + product.priceNonMember)
    }
    console.log(product)
  }

  return (
    <button onClick={() => addToCart(props.id)} className='buttonAdd'>ADICIONAR</button>
  )
}

export default ButtonProduct
