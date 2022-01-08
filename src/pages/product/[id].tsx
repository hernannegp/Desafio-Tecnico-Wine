import React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { selectProduct } from '../../components/Redux/slices/productSlice'
import { iList } from '../../components/interfaces'
import ProductDetailStyle from '../../styles/components/ProductDetailStyle'
import ButtonProduct from '../../components/utilities/ButtonProduct'
import Header from '../../components/Header/Header'

const productPage = () => {
  const router = useRouter()
  const { products } = useSelector(selectProduct)
  const productArray = []
  const productById = products.find((product: iList) => product.id === Number(router.query.id))
  productArray.push(productById)
  return (
    productArray.map((product: iList) => {
      return (
        <div key={product.id}>
          <Header />
          <ProductDetailStyle key={product.id}>
            <div className="imageDetail">
              <img className="wine-img" src={product.image} alt={product.name}/>
            </div>
            <div className="wineClassification">
              <h2><span className='winesSpan'><strong>Vinhos</strong></span> &gt; <span className='productCountry'>{product.country}</span> &gt; {product.region}</h2>
              <h1>{product.name}</h1>
              <div className='productDetailInfo'>
                <img src={product.flag} alt={`bandeira de ${product.country}`} width="16px"/>
                <p>{product.country}</p>
                <p>{product.type}</p>
                <p>{product.classification}</p>
                <p>{product.volume}</p>
                <p>{`${product.rating} estrelas (${product.avaliations})`}</p>
              </div>
            <div className="winePrice">
              <p className="price">{`R$ ${product.price}`}</p>
              <p className='detailNonMemberPrice'>NÃO SÓCIO R$ {product.priceNonMember}/UN.</p>
            </div>
              <h1>Comentário do Sommelier</h1>
              <p className='comentarioSommelier'>{product.sommelierComment}</p>
              <ButtonProduct id={product.id}/>
            </div>
          </ProductDetailStyle>
        </div>
      )
    })
  )
}

export default productPage
