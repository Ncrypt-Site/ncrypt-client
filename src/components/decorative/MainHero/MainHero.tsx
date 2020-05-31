import './main-hero.scss'
import React from 'react'

export const Hero: React.FC = () => {
  return (
    <div className="main-hero">
      <div className="hero-text fz-1-2">
        Send notes with ultimate security and privacy.
      </div>

      <div className="reasons">
        <ul className="reasons-list">
          <li>
            <span role="img" aria-label="lock">
              🔒
            </span>{' '}
            Military grade encryption (AES-256)
          </li>
          <li>
            <span role="img" aria-label="shield">
              🛡
            </span>{' '}
            Client side encryption to protecting privacy and security.
          </li>
        </ul>
      </div>
    </div>
  )
}
