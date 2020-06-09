import React from 'react'

interface AboutProps {
}

export const About: React.FC<AboutProps> = () => {
  return (
    <div className="single-page">
      <div className="content">
        <h1 className="title">About</h1>
        <p>nCrypt helps you to share critical data with others over the internet securely. As simple as that.</p> <br/>
        <p>
          We are using <strong>military-grade encryption (AES256)</strong> on the client-side to ensure no sensitive
          data will be sent over the internet.
          Also, we can't read your critical data simply because everything happens on your side and your browser.
          If you have any doubt feel free to check the codes on Github.
        </p> <br/>
        <p>
          Our API will only be able to hold your encrypted data as long as you want, and we tend to destroy the data as
          soon as it's accessed, of course, you can have the data on the server for multiple access, but we do not
          suggest
          it.
        </p>
      </div>
    </div>
  )
}
