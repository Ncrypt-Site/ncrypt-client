import './ny-button.scss'
import React, { MouseEvent } from 'react'
import loadingGrid from '../../../assets/grid.svg'

interface NyButtonProps {
  onClick?(e: MouseEvent<HTMLButtonElement>): void
  color?: 'primary' | undefined
  className?: string
  loading?: boolean
}

export const NyButton: React.FC<NyButtonProps> = (props) => {
  const classes = `btn ${props.color} ${props.loading ? 'loading' : ''} ${
    props.className
  }`

  let Loading: React.SFCElement<HTMLElement> | null = null

  if (props.loading) {
    Loading = <img className="loader" src={loadingGrid} alt="loading..." />
  }

  return (
    <button className={classes} onClick={props.onClick}>
      {Loading}
      {props.children}
    </button>
  )
}
