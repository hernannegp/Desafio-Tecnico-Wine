import React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectProduct } from '../../components/Redux/slices/productSlice'
import { iList } from '../../components/interfaces'
import ProductDetailStyle from '../../styles/components/ProductDetailStyle'

const productPage = () => {
  const router = useRouter()
  const { products } = useSelector(selectProduct)
  const productArray = []
  const productById = products.find((product: iList) => product.id === Number(router.query.id))
  productArray.push(productById)
  return (
    productArray.map((product: iList) => {
      return (
        <ProductDetailStyle key={product.id}>
          <img className="wine-img" src={product.image} alt={product.name}/>
          <div className="wine-classification">
            <h2>{product.country} &gt; {product.region}</h2>
            <h1>{product.name}</h1>
            <div>
              <img src={product.flag} alt={`bandeira de ${product.country}`} width="16px"/>
              <p>{product.country}</p>
              <p>{product.type}</p>
              <p>{product.classification}</p>
              <p>{product.volume}</p>
              <p>{`${product.rating} estrelas (${product.avaliations})`}</p>
            </div>
          <div className="wine-price">
            <p className="price">{`R$ ${product.price}`}</p>
            <p>NÃO SÓCIO R$ {product.priceNonMember}/UN.</p>
          </div>
            <h1>Comentário do Sommelier</h1>
            <p>{product.sommelierComment}</p>
          </div>
        </ProductDetailStyle>
      )
    })
  )
}

export default productPage
