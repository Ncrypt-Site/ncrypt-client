import './note-input-copy.scss'
import React from 'react'
import { mdiContentCopy } from '@mdi/js'
import Icon from '@mdi/react'
import { CopyString } from '../../../helpers/CopyString/CopyString'
import { toast } from 'react-toastify'

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
  const onCopy = () => {
    CopyString(value)
    toast.dark(' Copied to clipboard', {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }

  return (
    <div className={`note-input-copy ${className}`}>
      <div className="label">{label}</div>

      <div className={`input-group ${icon && 'has-icon'}`}>
        {icon && <Icon path={icon} className="main-icon" />}
        <div className="input">{value}</div>
        <span className="icon" onClick={onCopy}>
          <Icon path={mdiContentCopy} />
        </span>
      </div>
    </div>
  )
}
