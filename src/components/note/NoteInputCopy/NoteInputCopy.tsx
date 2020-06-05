import './note-input-copy.scss'
import React from 'react'
import { mdiContentCopy } from '@mdi/js'
import Icon from '@mdi/react'

interface NoteInputCopyProps {
  value: string
  label: string
  className?: string
  icon?: string
}

export const NoteInputCopy: React.FC<NoteInputCopyProps> = ({
  value,
  label,
  className,
  icon,
}) => {
  return (
    <div className={`note-input-copy ${className}`}>
      <div className="label">{label}</div>

      <div className={`input-group ${icon && 'has-icon'}`}>
        {icon && <Icon path={icon} className="main-icon" />}
        <div className="input">{value}</div>
        <span className="icon">
          <Icon path={mdiContentCopy} />
        </span>
      </div>
    </div>
  )
}
