import './note-editor.scss'
import React, { useRef } from 'react'
import mangane from '../../../assets/mangane.svg'
import { NyButton } from '../../shared/NyButton/NyButton'
import { NySwitch } from '../../shared/NySwitch/NySwitch'

export const NoteEditor: React.FC = () => {
  const noteElement = useRef<HTMLDivElement>(null)

  const clickHandler = () => {
    console.log(noteElement.current?.innerText)
  }
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

      <div className="actions mt-5">
        <NySwitch />
        <NyButton onClick={clickHandler}>Encrypt and send</NyButton>
      </div>
    </div>
  )
}
