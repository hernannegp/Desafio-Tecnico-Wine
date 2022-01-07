import React from 'react'
import UlStyle from '../../styles/components/ProductStyle'
import { useSelector } from 'react-redux'
import { selectProduct } from '../Redux/slices/productSlice'
import ButtonProduct from '../utilities/ButtonProduct'
import { iList } from '../interfaces'
import { useRouter } from 'next/router'

const ProductCard: React.FC = () => {
  const { products, initialSlice, finalSlice } = useSelector(selectProduct)
  const ROUTE_DETAILS = '/product/[id]'
  const router = useRouter()
  const navigate = (id: number) => {
    router.push({
      pathname: ROUTE_DETAILS,
      query: { id }
    })
  }
  return (
    <div>
      <UlStyle>
        { products.length === 0
          ? <p>Nenhum produto encontrado</p>
          : products.map((product: iList) => (
            <div key={product.id} className="productCard">
              <div className="imagesContainer">
                <img onClick={() => navigate(product.id)} src={ product.image } alt={ product.name } width="150px"/>
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
          )).slice(initialSlice, finalSlice)
        }
      </UlStyle>
    </div>
  )
}

export default ProductCard
