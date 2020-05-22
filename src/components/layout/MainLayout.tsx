import React, { ReactType } from 'react'
import { Header } from './MainHeader/MainHeader'

interface MainLayoutProps {
  Content: ReactType
}

export const MainLayout: React.FC<MainLayoutProps> = ({ Content }) => {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  )
}
