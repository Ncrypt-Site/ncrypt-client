import React from 'react'
import Logo from '../../assets/logo.svg'

interface headerProps {}

export const Header: React.FC<headerProps> = ({}) => {
  return (
    <header className='main-header'>
      <a href='#'>
        <img src={Logo} alt='' />
      </a>
    </header>
  )
}
