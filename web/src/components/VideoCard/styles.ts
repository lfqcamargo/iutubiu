import styled from 'styled-components'

export const ContainerArticle = styled.article`
  display: flex;
  flex-direction: column;
  
  min-width: 276px;
  min-width: 225px;
`

export const ContainerVideo = styled.div`
  min-width: 100%;
  height: 153px;
`

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 72px;  

  margin-top: 14px;
`

export const ContainerProfile = styled.div`
  display: flex;
  height: 100%;
  width: 50px;

  justify-content: center;

  img {
    height: 32px;
    width: 32px;
  }
`

export const ContainerText = styled.div`
  p {
    font-family: "Roboto", serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-weight: 400;

    font-size: 14px;
    margin-bottom: 4px;
  }

  div {
    display: flex;
    gap: 10px;
  }
`
