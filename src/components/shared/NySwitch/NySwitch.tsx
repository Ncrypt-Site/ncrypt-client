import './ny-switch.scss'
import React, { ChangeEvent } from 'react'

interface NySwitchProps {
  onChange?(e: ChangeEvent<HTMLElement>): void
  label?: string
  defaultChecked?: boolean
}

export const NySwitch: React.FC<NySwitchProps> = ({
  label,
  onChange,
  defaultChecked,
}) => {
  const inputProps = {
    defaultChecked,
  }

  return (
    <label className="ny-switch">
      <input type="checkbox" onChange={onChange} {...inputProps} />
      <span className="switcher"></span>
      <span className="label">{label}</span>
    </label>
  )
}
