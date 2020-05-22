import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Note } from './Note/Note'
import { Home } from './Home/Home'
interface IndexProps {}

export const Index: React.FC<IndexProps> = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/:id" component={Note} />
      </Switch>
    </main>
  )
}
