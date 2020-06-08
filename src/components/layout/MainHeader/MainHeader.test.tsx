import React from 'react'
import { render } from '@testing-library/react'
import { Header } from './MainHeader'
import { BrowserRouter } from 'react-router-dom'

test('render Header', () => {
  const { getByAltText } = render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  )
  const LogoElement = getByAltText(/nyCrypt/i)
  expect(LogoElement).toBeVisible()
})
