import { Outlet } from 'react-router-dom'
import { HeaderContainer, HeaderContent, ContainerLeft, IconContainer, LogoContainer, ContainerSearch, CenterContainer, ContainerRight, ContainerIcons } from './styles'

export function AppLayout() {
  return (
    <>
      <HeaderContainer>
        <HeaderContent>
          <ContainerLeft>
            <IconContainer>
              <img src="/hamburger_menu_icon.png" alt="Menu" />
            </IconContainer>

            <LogoContainer>
              <img src="/logo.png" alt="Logo" />
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
      <Outlet />

    </>
  )
}
