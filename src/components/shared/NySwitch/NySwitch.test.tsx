import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { NySwitch } from './NySwitch'

test('NySwitch works on click', () => {
  const handleChange = jest.fn()
  const { container } = render(<NySwitch onChange={handleChange} />)
  const switchInput = container.querySelector('.ny-switch')
  const checkbox = container.querySelector('[type=checkbox]')
  fireEvent.click(switchInput || container)
  expect(handleChange).toHaveBeenCalledTimes(1)
  expect(checkbox).toBeDefined()
  if (checkbox) expect(checkbox.checked).toBe(true)
})
