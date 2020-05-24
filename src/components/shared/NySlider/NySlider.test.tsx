import React from 'react'
import { render } from '@testing-library/react'
import { NySlider } from './NySlider'

const stepsArray = [0, 1, 3, 6, 12, 24, 48, 72, 168, 720]
const stepsMarks = {
  0: '0',
  1: '1 h',
  2: '3 h',
  3: '6 h',
  4: '12 h',
  5: '24 h',
  6: '2 d',
  7: '3 d',
  8: '7 d',
  9: '1 m',
}

const setup = () => {
  const utils = render(<NySlider marks={stepsMarks} stepsArray={stepsArray} />)
  const slider = utils.getByTestId('ny-slider')

  return {
    slider,
    ...utils,
  }
}

test('NySlider is visible', () => {
  const { slider } = setup()

  expect(slider).toBeVisible()
})

test('NySlider marks', () => {
  const { slider } = setup()

  expect(slider).toHaveTextContent('12 h')
})
