import React from 'react'
import GlobalStyle from '../styles/global'
import store from '../components/Redux/store'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import colors from '../styles/themes/colors'

function MyApp ({ Component, pageProps }) {
  return (
    <ThemeProvider theme={colors}>
      <Provider store={store}>
        <Component {...pageProps} />
        <GlobalStyle />
      </Provider>
    </ThemeProvider>
  )
}

export default MyApp
