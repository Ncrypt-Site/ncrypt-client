import './main-header.scss'
import React from 'react'
import Logo from '../../../assets/logo.svg'
import { Menu } from '../MainMenu/MainMenu'

export const Header: React.FC = () => {
  return (
    <header className="main-header">
      <a href="/">
        <img src={Logo} alt="nyCrypt" />
      </a>

      <Menu />
    </header>
  )
}
