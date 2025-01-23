import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  height: 68px;
  width: 100%;

  align-items: center;  
`

export const HeaderContent = styled.div`
  display: flex;
  width: 100%;
  margin: 0px 29px 0px 24px;

  align-items: center;
  justify-content: space-between;
`

export const ContainerLeft = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
`

export const IconContainer = styled.div`
  width: 24px;
  height: 24px;

  img {
    object-fit: cover;
  }
`

export const LogoContainer = styled.div`
  width: 80px;
  height: 24px;

  img {
    object-fit: cover;
  }
`

export const CenterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  justify-content: center;

  input { 
    width: 573px;
    height: 29px;

    border: 1px solid ${(props) => props.theme.border};
    border-radius: 2px 0px 0px 2px;
    text-indent: 12px;
  }
`

export const ContainerSearch = styled.div`
  display: flex;
  width: 63px;
  height: 29px;
  align-items: center;
  justify-content: center;
  text-align: center;

  background-color: ${(props) => props.theme.gray};
  border: 1px solid ${(props) => props.theme.border};
  border-radius: 0px 2px 0px 2px;

  div {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`

export const ContainerRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

`

export const ContainerIcons = styled.div`
    display: flex;
    gap: 24px;
    margin-right: 24px;
`
