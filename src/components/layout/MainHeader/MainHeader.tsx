import './main-header.scss'
import React from 'react'
import Logo from '../../../assets/logo.svg'
import { Menu } from '../MainMenu/MainMenu'
import { Link } from 'react-router-dom'

export const Header: React.FC = () => {
  return (
    <header className="main-header">
      <Link to="/" href="/">
        <img src={Logo} alt="nyCrypt" />
      </Link>

      <Menu />
    </header>
  )
}
