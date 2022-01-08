import React from 'react'
import { setIntialSlice, setFinalSlice } from '../Redux/slices/productSlice'
import { useDispatch } from 'react-redux'
import ButtonCatalogStyle from '../../styles/components/ButtonCatalog'

const ButtonCatalog: React.FC = () => {
  const dispatch = useDispatch()
  const handleClick = (e) => {
    if (e.target.value === '1') {
      dispatch(setIntialSlice(0))
      dispatch(setFinalSlice(9))
    }
    if (e.target.value === '2') {
      dispatch(setIntialSlice(10))
      dispatch(setFinalSlice(19))
    }
    if (e.target.value === '3') {
      dispatch(setIntialSlice(20))
      dispatch(setFinalSlice(29))
    }
    if (e.target.value === '4') {
      dispatch(setIntialSlice(30))
      dispatch(setFinalSlice(39))
    }
    if (e.target.value === '5') {
      dispatch(setIntialSlice(40))
      dispatch(setFinalSlice(49))
    }
    if (e.target.value === '6') {
      dispatch(setIntialSlice(50))
      dispatch(setFinalSlice(59))
    }
    if (e.target.value === '7') {
      dispatch(setIntialSlice(60))
      dispatch(setFinalSlice(62))
    }
  }
  return (
    <ButtonCatalogStyle>
      <button className="buttonCatalog" onClick={handleClick} value="1">1</button>
      <button className="buttonCatalog" onClick={handleClick} value="2">2</button>
      <button className="buttonCatalog" onClick={handleClick} value="3">3</button>
      <button className="buttonCatalog" onClick={handleClick} value="4">4</button>
      <button className="buttonCatalog" onClick={handleClick} value="5">5</button>
      <button className="buttonCatalog" onClick={handleClick} value="6">6</button>
      <button className="buttonCatalog" onClick={handleClick} value="7">7</button>
    </ButtonCatalogStyle>
  )
}

export default ButtonCatalog
