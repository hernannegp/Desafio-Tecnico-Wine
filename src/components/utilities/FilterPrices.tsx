import React from 'react'
import { FilterPricesStyle } from '../../styles/components/FilterPricesStyle'
import { useSelector, useDispatch } from 'react-redux'
import { selectProduct, setProducts } from '../Redux/slices/productSlice'
import { iList } from '../interfaces'
interface props {
  itemsLength: number
}

const FilterPrices: React.FC<props> = (props) => {
  const { products } = useSelector(selectProduct)
  const dispatch = useDispatch()
  const handleChange = ({ target: { value } }) => {
    if (value === '40') {
      const filteredProducts = products.filter((product: iList) => product.priceMember <= 40)
      dispatch(setProducts(filteredProducts))
    }
    if (value === '40-60') {
      const filteredProducts = products.filter((product: iList) => product.priceMember > 40 && product.priceMember <= 60)
      dispatch(setProducts(filteredProducts))
    }
    if (value === '100-200') {
      const filteredProducts = products.filter((product: iList) => product.priceMember >= 100 && product.priceMember <= 200)
      dispatch(setProducts(filteredProducts))
    }
    if (value === '200-500') {
      const filteredProducts = products.filter((product: iList) => product.priceMember >= 200 && product.priceMember <= 500)
      dispatch(setProducts(filteredProducts))
    }
    if (value === '500+') {
      const filteredProducts = products.filter((product: iList) => product.priceMember > 500)
      dispatch(setProducts(filteredProducts))
    }
  }
  const handleClick = () => {
    dispatch(setProducts(products))
  }
  return (
    <FilterPricesStyle>
      <div className="searchAndFoundItems">
        <p>{`Produtos encontrados: ${props.itemsLength}`}</p>
        <div className="searchContainer">
          <h1><strong>Refine sua busca</strong></h1>
          <p><strong>Por preço</strong></p>
        </div>
      </div>
      <form className='formFilters' method="post">
        <label htmlFor="input1" className="labelInputs">
          <input
            className="labelInput"
            onChange={handleChange}
            type="radio"
            id="input1"
            value="40"
            name="filters"
          />
          Até R$40
        </label>
        <label htmlFor="input2" className="labelInputs">
          <input
            className="labelInput"
            onChange={handleChange}
            type="radio"
            id="input2"
            value="40-60"
            name="filters"
          />
          R$40 A R$60
        </label>
        <label htmlFor="input3" className="labelInputs">
          <input
            className="labelInput"
            onChange={handleChange}
            type="radio"
            id="input3"
            value="100-200"
            name="filters"
          />
          R$100 A R$200
        </label>
        <label htmlFor="input4" className="labelInputs">
          <input
            className="labelInput"
            onChange={handleChange}
            type="radio"
            id="input4"
            value="200-500"
            name="filters"
          />
          R$200 A R$500
        </label>
        <label htmlFor="input5" className="labelInputs">
          <input
            className="labelInput"
            onChange={handleChange}
            type="radio"
            id="input5"
            value="500+"
            name="filters"
          />
          Acima de R$500
        </label>
        <button type="submit" onClick={handleClick}>X</button>
      </form>
    </FilterPricesStyle>
  )
}

export default FilterPrices
