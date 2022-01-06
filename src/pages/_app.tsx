import React from 'react'
import GlobalStyle from '../styles/global'
import store from '../components/Redux/store'
import { Provider } from 'react-redux'

function MyApp ({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
      <GlobalStyle />
    </Provider>
  )
}

export default MyApp
