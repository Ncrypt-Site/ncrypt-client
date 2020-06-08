import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Note } from './Note/Note'
import { Home } from './Home/Home'
import { About } from './About/About'
import { Sent } from './Sent/Sent'
interface IndexProps {}

export const Index: React.FC<IndexProps> = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/note/:id" component={Note} />
        <Route path="/about" component={About} />
        <Route path="/sent" component={Sent} />
      </Switch>
    </main>
  )
}
