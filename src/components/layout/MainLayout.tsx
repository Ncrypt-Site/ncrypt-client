import React, { ReactType } from 'react'
import { Header } from './Header'

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
