import React from 'react'
import UlStyle from './styles'
import { useSelector } from 'react-redux'
import { selectProduct } from '../Redux/slices/productSlice'
import ButtonProduct from '../utilities/ButtonProduct'
import { iList } from '../interfaces'

const ProductCard: React.FC = () => {
  const { products } = useSelector(selectProduct)
  return (
    <div>
      <UlStyle>
        {
          products.map((product: iList) => (
            <div key={product.id} className="productCard">
              <div className="imagesContainer">
                <img src={ product.image } alt={ product.name } width="150px"/>
                <img src={ product.flag } width="30px"/>
              </div>
              <h3>{ product.name }</h3>
              <div className="pricesContainer">
                <p className="priceNonMember">{`R$ ${product.priceNonMember}`}</p>
                <p className="discount">{ `${product.discount}% OFF` }</p>
              </div>
              <p><strong>SÓCIO WINE R$: <span>{product.priceMember}</span></strong></p>
              <p className="notPartner"><strong>{`NÃO SÓCIO R$ ${product.priceNonMember}`}</strong></p>
              <ButtonProduct id={product.id} />
            </div>
          ))
        }
      </UlStyle>
    </div>
  )
}

export default ProductCard
