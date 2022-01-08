import React from 'react'
import HeaderStyle from '../../styles/components/Header'

const Header: React.FC = () => {
  return (
    <div>
      <HeaderStyle>
        <img data-testid="wineIcon" src="https://img.wine.com.br/logo/wine/black/wine.svg"/>
        <p>Clube</p>
        <p>Loja</p>
        <p>Produtores</p>
        <p>Ofertas</p>
        <p>Eventos</p>
        <img data-testid="searchIcon" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSXHJuJKjrqJMzTERi6KnRPjJ7w4TXueby2g&usqp=CAU" width="20px"/>
        <img data-testid="profileIcon" src="https://www.pngkey.com/png/detail/72-729670_png-file-svg-single-user-icon-png.png" width="20px"/>
        <img data-testid="cartIcon" src="https://www.pngrepo.com/png/60848/512/shopping-cart-empty-side-view.png" width="20px"/>
      </HeaderStyle>
    </div>
  )
}

export default Header
