import React from 'react'
import Header from '../components/Header/Header'
import GlobalStyle from '../styles/global'
import { ThemeProvider } from 'styled-components'
import colors from '../styles/themes/colors'

export default function Home () {
  return (
    <ThemeProvider theme={colors}>
      <main>
        <GlobalStyle />
        <Header />
      </main>
    </ThemeProvider>
  )
}
