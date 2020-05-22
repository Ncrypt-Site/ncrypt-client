import './ny-button.scss'
import React, { MouseEvent } from 'react'

interface NyButtonProps {
  onClick?(e: MouseEvent<HTMLElement>): void
  color?: 'primary' | undefined
  className?: string
}

export const NyButton: React.FC<NyButtonProps> = (props) => {
  const classes = `btn ${props.color} ${props.className}`
  return (
    <button className={classes} {...props}>
      {props.children}
    </button>
  )
}
