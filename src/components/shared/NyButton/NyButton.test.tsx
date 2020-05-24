import React, {MouseEvent} from 'react'
import { render,fireEvent } from '@testing-library/react'
import { NyButton } from './NyButton'

test('test NyButton', () => {
  let el: any = null
  const testHandler = (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => {
    el = e.target
  }
  const { getByRole } = render(<NyButton onClick={testHandler}>Button</NyButton>)
  const Button = getByRole('button')
  fireEvent.click(Button)

  expect(Button).toBe(el)
})
