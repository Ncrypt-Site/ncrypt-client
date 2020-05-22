import React from 'react'
import { Hero } from '../../decorative/MainHero/MainHero'
import { NoteEditor } from '../../note/NoteEditor/NoteEditor'

export const Home: React.FC = () => {
  return (
    <div>
      <Hero />
      <NoteEditor />
    </div>
  )
}
