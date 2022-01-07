import styled from 'styled-components'

export const FilterPricesStyle = styled.aside`
  .formFilters {
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-evenly;
    margin-top: 1rem;
  }

  .searchAndFoundItems {
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    margin-right: 32rem;
  }

  .containerFilters {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
  }

  .labelInputs {
    padding: 0.3rem;
    background-color: ${props => props.theme.colors.primary};
    border-radius: 10px;
    color: #f5f5f5;
  }

  button {
    border: 1px solid ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.primary};
    color: ${props => props.theme.colors.textWhite};
    border-radius: 10px;
    padding: 0.5rem;
  }
`
