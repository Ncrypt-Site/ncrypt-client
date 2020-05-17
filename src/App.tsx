import React from 'react'
import './scss/App.scss'
import {MainLayout} from './components/layout/MainLayout'
import { HomePage } from './components/HomePage'

function App() {
  return <MainLayout Content={HomePage} />
}

export default App
