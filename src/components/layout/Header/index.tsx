import React from 'react'
import Logo from '../../../assets/logo.svg'
import { Menu } from '../Menu'

export const Header: React.FC = ({}) => {
  return (
    <header className='main-header'>
      <a href='#'>
        <img src={Logo} alt='' />
      </a>

      <Menu />
    </header>
  )
}
