import './note-error.scss'
import React from 'react'
import errorArt from '../../../assets/error.svg'
import { AxiosResponse } from 'axios'
interface NoteErrorProps {
  response?: AxiosResponse | null
}

export const NoteError: React.FC<NoteErrorProps> = ({ response }) => {
  console.log(response)
  return (
    <div className="note-error">
      <h1>Error {response?.data.Code}</h1>
      <p className="message">{response?.data.Message}</p>
      <p className="mv-5">
        The note you are looking for not found, or probably destroyed
      </p>
      <img className="error-image" src={errorArt} alt="error" />
    </div>
  )
}
