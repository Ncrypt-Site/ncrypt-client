import React from 'react'
import { Route } from 'react-router-dom'
import { Note } from './Note/Note'
interface IndexProps {}

export const Index: React.FC<IndexProps> = () => {
  return (
    <main>
      <Route path="/:id" component={Note} />
    </main>
  )
}
