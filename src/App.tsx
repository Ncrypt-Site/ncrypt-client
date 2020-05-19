import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './scss/App.scss'
import { MainLayout } from './components/layout/MainLayout'
import { Index } from './components/pages'

function App() {
  return (
    <BrowserRouter>
      <MainLayout Content={Index} />
    </BrowserRouter>
  )
}

export default App
