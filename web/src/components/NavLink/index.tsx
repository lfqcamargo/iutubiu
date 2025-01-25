import { LinkProps, useLocation } from 'react-router-dom'
import { ContainerLink } from './styles'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation()

  return (
    <ContainerLink
      data-current={pathname === props.to}
      {...props}
    />
  )
}
