import './ny-button.scss'
import React, { MouseEvent } from 'react'
import loadingGrid from '../../../assets/grid.svg'
import { Link } from 'react-router-dom'

interface NyButtonProps {
  onClick?(e: MouseEvent<HTMLButtonElement>): void
  color?: 'primary' | 'secondary'
  className?: string
  loading?: boolean
  to?: string
}

export const NyButton: React.FC<NyButtonProps> = (props) => {
  const classes = `btn ${props.color|| ''} ${props.loading ? 'loading' : ''} ${
    props.className || ''
  }`

  let Loading: React.SFCElement<HTMLElement> | null = null

  if (props.loading) {
    Loading = <img className="loader" src={loadingGrid} alt="loading..." />
  }

  const button = (
    <button className={classes} onClick={props.onClick}>
      {Loading}
      {props.children}
    </button>
  )

  if (props.to) {
    return (
      <Link to={props.to} href={props.to}>
        {button}
      </Link>
    )
  }

  return button
}
