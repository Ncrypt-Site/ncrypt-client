import './error-show.scss'
import React from 'react'
import errorArt from '../../assets/error.svg'
interface ErrorShowProps {
  status?: number | null
}

export const ErrorShow: React.FC<ErrorShowProps> = ({ status }) => {
  return (
    <div className="error-show">
      <h1>Error {status}</h1>
      <p className="mv-5">The note you are looking for not found, or probably destroyed</p>
      <img className="error-image" src={errorArt} alt="error" />
    </div>
  )
}
