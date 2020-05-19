import React from 'react'
import Icon from '@mdi/react'
import { mdiGithub } from '@mdi/js'

export const Menu: React.FC = ({}) => {
  return (
    <div className="menu">
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <Icon size={1} path={mdiGithub} color="#333" />
        <a href="#">Github</a>
      </li>
      <li>
        <a href="#">Hire US</a>
      </li>
    </div>
  )
}
