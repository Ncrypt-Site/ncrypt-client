import './note.scss'
import React, { useState, ChangeEvent } from 'react'
import { NoteShow } from '../../note/NoteShow/NoteShow'
import { NotePassword } from '../../note/NotePassword/NotePassword'
import { NyButton } from '../../shared/NyButton/NyButton'
import Icon from '@mdi/react'
import { mdiLock } from '@mdi/js'

interface NoteProps {}

export const Note: React.FC<NoteProps> = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [password, setPassword] = useState('')

  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target

    setPassword(input.value)
  }

  return (
    <div className="note-page">
      <NoteShow blur>
        This HTML file is a template. If you open it directly in the browser,
        you will see an empty page. You can add webfonts, meta tags, or
        analytics to this file. The build step will place the bundled scripts
        into the tag. To begin the development, run `npm start` or `yarn start`.
        To create a production bundle, use `npm run build` or `yarn build`.
      </NoteShow>

      <div className="password-box">
        <NotePassword
          placeholder="Enter Password"
          label="Enter the password to open the Note"
          onChange={passwordHandler}
        />

        <NyButton>
          <Icon path={mdiLock} size="1rem" style={{ marginRight: '0.25rem' }} />
          Open Note
        </NyButton>
      </div>
    </div>
  )
}
