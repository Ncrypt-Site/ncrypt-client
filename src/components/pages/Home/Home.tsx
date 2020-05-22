import './home.scss'
import React from 'react'
import { Hero } from '../../decorative/MainHero/MainHero'
import { NoteEditor } from '../../note/NoteEditor/NoteEditor'
import { NoteOptions } from '../../note/NoteOptions/NoteOptions'
import { NyButton } from '../../shared/NyButton/NyButton'
import Icon from '@mdi/react'
import { mdiLock } from '@mdi/js'
import Art from '../../../assets/art.svg'

export const Home: React.FC = () => {
  return (
    <div className="page-home">
      <Hero />
      <NoteEditor />
      <div className="actions">
        <NoteOptions />
        <NyButton>
          <Icon path={mdiLock} size="1rem" />
          Encrypt and send
        </NyButton>
      </div>
      <img src={Art} alt="art" className="art hidden-mobile"/>
    </div>
  )
}
