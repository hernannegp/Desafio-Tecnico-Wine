import styled from 'styled-components'

const UlStyle = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;

  .productCard {
    display: flex;
    flex-flow: column;
    align-items: center;
    margin: 0.8rem;
    flex: 1 1 30%;
  }

  .pricesContainer {
    display: flex;
    flex-direction: row;
    align-items: center;
    white-space: nowrap;
  }

  .priceNonMember {
    text-align: center;
    text-decoration: line-through;
    color: ${props => props.theme.colors.textSecondary};
  }

  .discount {
    color: #f5f5f5;
    background-color: ${props => props.theme.colors.quaternary};
    border-radius: 10%;
    padding: 0.2rem;
    margin-left: 0.5rem;
  }

  span {
    color: ${props => props.theme.colors.primary};
    font-size: 1.7rem;
  }

  .notPartner {
    color: ${props => props.theme.colors.textSecondary};
  }

  .buttonAdd {
    background-color: ${props => props.theme.colors.buttonColor};
    border: none;
    width: 70%;
    border-radius: 3px;
    padding: 0.9rem;
    color: #f5f5f5;
    margin-top: 1rem;
  }
`
export default UlStyle
