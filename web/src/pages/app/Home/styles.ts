import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex: 1;

  overflow: hidden;  
  width: 100%;
`

export const ContainerVideos = styled.div`
  margin: 24px;

  overflow: scroll;
`

export const ContainerVideoCard = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 16px;
`
