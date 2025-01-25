import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;  
  min-width: 240px;
  max-height: 100%;

  overflow-y: auto;

  font-family: "Roboto", serif;
  font-optical-sizing: auto;
  font-style: normal;
  font-weight: 400;

  nav {
    display: flex;
    flex-direction: column;

    margin-left: 24px;
    margin-bottom: 12px;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }

  img {
    height: 24px;
    width: 24px;

    margin-right: 24px;
  }

  span {
    margin: 15px 0px 10px 24px;

    color: ${(props) => props.theme['gray-span']};
  }
`
