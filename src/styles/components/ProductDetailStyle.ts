import styled from 'styled-components'

const ProductDetailStyle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;

  .wineClassification {
    display: flex;
    flex-direction: column;
    align-items: right;
    justify-content: space-evenly;
  }

  .comentarioSommelier {
    max-width: 450px;
    color: ${props => props.theme.colors.textSecondary};
  }

  .productDetailInfo {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  }

  .winePrice {
    display: flex;
    flex-direction: column;
  }

  .price {
    color: ${props => props.theme.colors.primary};
    font-size: 40px;
  }

  .detailNonMemberPrice {
    color: ${props => props.theme.colors.textSecondary};
    font-size: 18px;
  }

  .productCountry {
    color: ${props => props.theme.colors.primary};
  }

  .winesSpan {
    color: ${props => props.theme.colors.primary};
  }

  button {
    background-color: ${props => props.theme.colors.buttonColor};
    border: none;
    width: 70%;
    border-radius: 3px;
    padding: 0.9rem;
    color: #f5f5f5;
    margin-top: 1rem;
  }
`
export default ProductDetailStyle
