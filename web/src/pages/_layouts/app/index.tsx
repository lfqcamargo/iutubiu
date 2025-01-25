import { Link, Outlet } from 'react-router-dom'
import { HeaderContainer, HeaderContent, ContainerLeft, IconContainer, LogoContainer, ContainerSearch, CenterContainer, ContainerRight, ContainerIcons, MainContainer } from './styles'
import { SideMenu } from '../../../components/SideMenu'
import { useState } from 'react'

export function AppLayout() {
  const [isSideMenuVisible, setIsSideMenuVisible] = useState(true)

  const toggleSideMenu = () => {
    setIsSideMenuVisible((prev) => !prev)
  }

  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <ContainerLeft>
            <IconContainer onClick={toggleSideMenu} style={{cursor: 'pointer'}}>
              <img src="/hamburger_menu_icon.png" alt="Menu" />
            </IconContainer>

            <LogoContainer>
              <Link to={'/'}><img src="/logo.png" alt="Logo" /></Link>
            </LogoContainer>
          </ContainerLeft>

          <CenterContainer>
            <input type="text" placeholder="Search" />
            <ContainerSearch>
              <div>
                <img src="/search_icon.png" alt="Search" />
              </div>

            </ContainerSearch>

          </CenterContainer>

          <ContainerRight>
            <ContainerIcons>
              <IconContainer>
                <img src="/create_icon.png" alt="Create" />
              </IconContainer>
              <IconContainer>
                <img src="/chocolate_icon.png" alt="Chocolate" />
              </IconContainer>
              <IconContainer>
                <img src="/notification_icon.png" alt="Notification" />
              </IconContainer>
            </ContainerIcons>
            <div>
              <img src="/profile_photo.png" alt="Profile Photo" />
            </div>
          </ContainerRight>
        </HeaderContent>

      </HeaderContainer>
      <MainContainer>
        {isSideMenuVisible && <SideMenu />}
        <Outlet />
      </MainContainer>
    </>
  )
}
