import './note-show.scss'
import React from 'react'
import mangane from '../../../assets/mangane.svg'

interface NoteShowProps {
  text?: string
}

export const NoteShow: React.FC<NoteShowProps> = ({text,children}) => {
  return (
    <div className="main-note">
      <div className="note-container">
        <div className="mangane">
          <img src={mangane} alt="" />
        </div>
        <div
          className="note-show"
        >
          {text || children}
        </div>
      </div>
    </div>
  )
}
