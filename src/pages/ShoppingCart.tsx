import React from 'react'
import { iList } from '../components/interfaces'
import ShoppingCartStyle from '../styles/components/ShoppingCartStyle'
import Header from '../components/Header/Header'

const ShoppingCart: React.FC = () => {
  const storageItems = JSON.parse(localStorage.getItem('cartItems') || '[]')
  return (
    <div>
      <Header />
      <ShoppingCartStyle>
        { storageItems.length === 0
          ? <h1>Nenhum produto encontrado</h1>
          : storageItems.map((item: iList) => (
            <div key={item.id} className='itemCard'>
              <img src={ item.image } alt={ item.name } width="150px"/>
              <h3>{ item.name }</h3>
            </div>
          ))}
      </ShoppingCartStyle>
    </div>
  )
}

export default ShoppingCart
