import { HeaderContainer } from './styles'
import Logo from '../../assets/logo.svg'
import { Scroll, Timer } from '@phosphor-icons/react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderContainer>
      <img src={Logo} alt="Dois triângulos verdes, um em cima do outro." />
      <nav>
        <NavLink to="/" title="Timer">
          <Timer size={24}></Timer>
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24}></Scroll>
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
