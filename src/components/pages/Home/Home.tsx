import './home.scss'
import React, { useState, ChangeEvent } from 'react'
import { Hero } from '../../decorative/MainHero/MainHero'
import { NoteEditor } from '../../note/NoteEditor/NoteEditor'
import { NoteOptions } from '../../note/NoteOptions/NoteOptions'
import { NyButton } from '../../shared/NyButton/NyButton'
import Icon from '@mdi/react'
import { mdiLock } from '@mdi/js'
import Art from '../../../assets/art.svg'

export const Home: React.FC = () => {
  const [text, setText] = useState<string | null>(null)

  const noteChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target
    setText(textarea.value)
    console.log(text)
  }

  const optionsChangeHandler = (valObject: object) => {
    console.log(valObject)
  }

  return (
    <div className="page-home">
      <Hero />
      <form action="">
        <NoteEditor onChange={noteChangeHandler} />
        <div className="actions">
          <NoteOptions onChange={optionsChangeHandler} />
          <NyButton>
            <Icon path={mdiLock} size="1rem" />
            Encrypt and send
          </NyButton>
        </div>
      </form>
      <img src={Art} alt="art" className="art hidden-mobile" />
    </div>
  )
}
