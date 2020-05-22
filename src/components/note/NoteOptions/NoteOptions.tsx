import './note-options.scss'
import React from 'react'
import { NySwitch } from '../../shared/NySwitch/NySwitch'
import { NotePassword } from '../NotePassword/NotePassword'

interface NoteOptionsProps {}

export const NoteOptions: React.FC<NoteOptionsProps> = () => {
  return (
    <div className="note-options">
      <h3 className="title hidden-mobile">Options</h3>
      <form action="">
        <NySwitch label="Self-destructs after reading" />
        <NotePassword
          className="mt-6"
          placeholder="Enter Password"
          label="Define Password"
        />
      </form>
    </div>
  )
}
