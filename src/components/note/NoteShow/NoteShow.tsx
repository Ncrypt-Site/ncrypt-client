import './note-show.scss'
import React from 'react'
import mangane from '../../../assets/mangane.svg'

interface NoteShowProps {
  text?: string
  blur?: boolean
}

export const NoteShow: React.FC<NoteShowProps> = ({ text, children, blur }) => {
  return (
    <div className="main-note">
      <div className={`note-container ${blur ? 'blur' : ''}`}>
        <div className="mangane">
          <img src={mangane} alt="" />
        </div>
        <div className="note-show">{text || children}</div>
      </div>
    </div>
  )
}
