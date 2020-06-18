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
      <h1>Ooops, an Alien stole your note...</h1>
      <p className="mv-5">
        Your note no longer lives :(
      </p>
      <img className="error-image" src={errorArt} alt="error" />
    </div>
  )
}
