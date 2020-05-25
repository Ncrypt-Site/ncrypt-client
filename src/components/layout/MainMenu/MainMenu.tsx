/* eslint-disable jsx-a11y/anchor-is-valid */
import './main-menu.scss'
import React from 'react'
import Icon from '@mdi/react'
import { mdiGithub } from '@mdi/js'
import { NavLink } from 'react-router-dom'

export const Menu: React.FC = () => {
  return (
    <ul className="menu">
      <li className="hidden-mobile">
        <NavLink  to="/about" href="/about">
          About
        </NavLink>
      </li>
      <li className="github">
        <a href="#">
          <Icon size={1} path={mdiGithub} className="icon" color="#333" />
          Github
        </a>
      </li>
      <li className="hidden-mobile">
        <a href="#">Hire US</a>
      </li>
    </ul>
  )
}
