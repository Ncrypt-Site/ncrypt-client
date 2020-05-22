import './ny-switch.scss'
import React, { ChangeEvent } from 'react'

interface NySwitchProps {
  onChange?(e: ChangeEvent<HTMLElement>): void
  label?: string
}

export const NySwitch: React.FC<NySwitchProps> = ({ label, onChange }) => {
  return (
    <label className="ny-switch">
      <input type="checkbox" onChange={onChange} />
      <span className="switcher"></span>
      <span className="label">{label}</span>
    </label>
  )
}
