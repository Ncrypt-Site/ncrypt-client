import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import './scss/App.scss'
import { MainLayout } from './components/layout/MainLayout'
import { Index } from './components/pages'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <MainLayout Content={Index} />
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App
