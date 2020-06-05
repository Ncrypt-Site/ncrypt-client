import './note-editor.scss'
import React, { ChangeEvent } from 'react'
import mangane from '../../../assets/mangane.svg'

interface NoteEditorProps {
  onChange?(e: ChangeEvent<HTMLTextAreaElement>): void
  disabled?: boolean
}

export const NoteEditor: React.FC<NoteEditorProps> = ({
  onChange,
  disabled,
}) => {
  return (
    <div className="main-note">
      <div className="note-container">
        <div className="mangane">
          <img src={mangane} alt="" />
        </div>
        <textarea
          disabled={disabled}
          className="note-editor"
          placeholder="Enter Text"
          onChange={onChange}
          style={{ height: '400px' }}
        ></textarea>
      </div>
    </div>
  )
}
