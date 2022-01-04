import styled from 'styled-components'

const HeaderStyle = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  p {
    color: ${props => props.theme.colors.textSecondary};
  }

  p:hover {
    color: ${props => props.theme.colors.primary};
    text-decoration: underline;
  }
`
export default HeaderStyle
