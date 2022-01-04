import React from 'react'
import Header from '../components/Header/Header'
import Products from '../components/Products/Products'
import { ThemeProvider } from 'styled-components'
import colors from '../styles/themes/colors'

export default function Home () {
  return (
    <ThemeProvider theme={colors}>
      <main>
        <Header />
        <Products />
      </main>
    </ThemeProvider>
  )
}
