import './sent.scss'
import React from 'react'
import { NoteInputCopy } from '../../note/NoteInputCopy/NoteInputCopy'
import { mdiLink, mdiKey } from '@mdi/js'
import { Redirect } from 'react-router-dom'
import { NyButton } from '../../shared/NyButton/NyButton'

interface SentProps {
  location?: { state: { noteUrl?: string; key?: string } }
  children: any
}

export const Sent: React.FC<SentProps> = (props) => {
  if (props.location && props.location.state) {
    const { noteUrl, key } = props.location.state

    if (noteUrl && key)
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
            value={key}
            label="Note Password"
            icon={mdiKey}
            className="mt-4"
          />

          <footer>
            <NyButton to="/">Back to home</NyButton>
          </footer>
        </div>
      )
  }

  return <Redirect to="/" />
}
