import React from 'react'

export const Hero: React.FC = () => {
  return (
    <div className="main-hero">
      <div className="hero-text">
        Send secure notes that will self-destruct after being read.
      </div>

      <div className="reasons">
        <ul className="reasons-list">
          <li>Encrypted with 256bit phrase</li>
          <li>Encoded in client side protecting privacy and security</li>
        </ul>
      </div>
    </div>
  )
}
