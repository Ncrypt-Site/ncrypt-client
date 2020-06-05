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
      <p className="mb-8">
        <span role="img" aria-label="confetti">
          🎊
        </span>
        Hooray!! <br />
        Note created now you can send the link to anyone <br />
        You should also Send them the password
      </p>
      <NoteInputCopy value={noteUrl} label="Note URL" icon={mdiLink} />

      <NoteInputCopy
        value={noteKey}
        label="Note Password"
        icon={mdiKey}
        className="mt-4"
      />
    </div>
  )
}
