import styled from 'styled-components'

export const LineStyle = styled.hr`
  width: 100%;

  border: 1px solid ${(props) => props.theme['gray-line']};
`
