import React from 'react'
import { render } from '@testing-library/react'
import { Header } from './MainHeader'

test('render Header', () => {
  const { getByAltText } = render(<Header />)
  const LogoElement = getByAltText(/nyCrypt/i)
  expect(LogoElement).toBeVisible()
})
