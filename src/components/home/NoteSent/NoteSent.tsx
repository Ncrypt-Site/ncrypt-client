import React from 'react'
import { NoteInputCopy } from '../../note/NoteInputCopy/NoteInputCopy'
import { mdiLink, mdiKey } from '@mdi/js'

interface NoteSentProps {
  noteUrl: string
  noteKey: string
}

export const NoteSent: React.FC<NoteSentProps> = ({ noteUrl, noteKey }) => {
  return (
    <div className="note-sent">
      <NoteInputCopy value={noteUrl} label="Note URL" icon={mdiLink} />

      <NoteInputCopy value={noteKey} label="Note Password" icon={mdiKey} className="mt-4" />
    </div>
  )
}
