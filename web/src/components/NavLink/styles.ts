import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContainerLink = styled(Link)`
    display: flex;
    height: 40px;

    align-items: center;    

    color: inherit;
    text-decoration: none;

    &:hover {
      background-color: ${(props) => props.theme.gray};
    }

    &[data-current='true'] {
    background-color: ${(props) => props.theme.gray};
    font-weight: bold;
  }
`
