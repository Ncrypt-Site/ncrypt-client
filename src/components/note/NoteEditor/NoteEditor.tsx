import './note-editor.scss'
import React, { useRef } from 'react'
import mangane from '../../../assets/mangane.svg'

interface NoteEditorProps {
  onChange?(text: string): void
}



export const NoteEditor: React.FC<NoteEditorProps> = () => {
  const noteElement = useRef<HTMLDivElement>(null)

  return (
    <div className="main-note">
      <div className="note-container">
        <div className="mangane">
          <img src={mangane} alt="" />
        </div>
        <div
          className="note-editor"
          contentEditable
          ref={noteElement}
          placeholder="Enter Text"
          style={{ height: '400px' }}
        ></div>
      </div>
    </div>
  )
}
