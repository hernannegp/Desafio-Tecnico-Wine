import React from 'react'
import { render } from '@testing-library/react'
import Header from '../components/Header/Header'

describe('Testa o Header', () => {
  it('Testa os elementos visiveis na tela', () => {
    const { getByText, getByTestId } = render(<Header/>)

    const wineIcon = getByTestId('wineIcon')
    const name = getByText('Clube')
    const store = getByText('Loja')
    const producers = getByText('Produtores')
    const offers = getByText('Ofertas')
    const events = getByText('Eventos')
    const searchIcon = getByTestId('searchIcon')
    const profileIcon = getByTestId('profileIcon')
    const cartIcon = getByTestId('cartIcon')

    expect(name).toBeVisible()
    expect(store).toBeVisible()
    expect(producers).toBeVisible()
    expect(offers).toBeVisible()
    expect(events).toBeVisible()
    expect(searchIcon).toBeVisible()
    expect(profileIcon).toBeVisible()
    expect(cartIcon).toBeVisible()
    expect(wineIcon).toBeVisible()
  })
})
