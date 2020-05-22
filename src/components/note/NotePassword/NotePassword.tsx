import './note-password.scss'
import React, { ChangeEvent } from 'react'
import Icon from '@mdi/react'
import { mdiKey } from '@mdi/js'

interface NotePasswordProps {
  placeholder?: string
  label?: string
  className?: string
  onChange?(e: ChangeEvent<HTMLElement>): void
}

export const NotePassword: React.FC<NotePasswordProps> = ({
  placeholder,
  label,
  className
}) => {
  return (
    <div className={`password-input-group ${className}`}>
      <label htmlFor="password">{label}</label>
      <div className="password-input">
        <input type="text" id="password" placeholder={placeholder} />
        <Icon path={mdiKey} color="#DFDFDF" className="icon" />
      </div>
    </div>
  )
}
