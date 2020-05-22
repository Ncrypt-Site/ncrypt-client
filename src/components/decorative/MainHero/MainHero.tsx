import './main-hero.scss'
import React from 'react'

export const Hero: React.FC = () => {
  return (
    <div className="main-hero">
      <div className="hero-text fz-1-2">
        Send secure notes that will self-destruct after being read.
      </div>

      <div className="reasons">
        <ul className="reasons-list">
          <li>
            <span role="img" aria-label="lock">
              🔒
            </span>{' '}
            Encrypted with 256bit phrase
          </li>
          <li>
            <span role="img" aria-label="shield">
              🛡
            </span>{' '}
            Encoded in client side protecting privacy and security
          </li>
        </ul>
      </div>
    </div>
  )
}
