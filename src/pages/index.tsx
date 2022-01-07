import React from 'react'
import Header from '../components/Header/Header'
import Products from '../components/Products/Products'
import ButtonCatalog from '../components/utilities/ButtonCatalog'

export default function Home () {
  return (
      <main>
        <Header />
        <Products />
        <ButtonCatalog />
      </main>
  )
}
