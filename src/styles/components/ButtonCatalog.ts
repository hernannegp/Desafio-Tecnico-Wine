import styled from 'styled-components'

const ButtonCatalogStyle = styled.div`
  text-align: center;

  .buttonCatalog {
    background-color: ${props => props.theme.colors.primary};
    border-style: none;
    padding: 1rem;
    border-radius: 60%;
    margin-left: 1.5rem;
    color: ${props => props.theme.colors.textWhite};
  }
`
export default ButtonCatalogStyle
