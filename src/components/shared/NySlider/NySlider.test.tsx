import React from 'react'
import { render } from '@testing-library/react'
import { NySlider } from './NySlider'

const stepsArray = [1, 3, 6, 12, 24, 48, 72, 168, 720]
const stepsMarks = {
  0: '1 hour',
  1: '3 hours',
  2: '6 hours',
  3: '12 hours',
  4: '24 hours',
  5: '2 days',
  6: '3 days',
  7: '7 days',
  8: '1 months',
}

test('slider renders', () => {
  let testVal = null

  const onChange = (val: number) => {
    testVal = val
  }

  const valIndex = 1

  render(
    <NySlider
      stepsArray={stepsArray}
      marks={stepsMarks}
      label="Expires in"
      valIndex={valIndex}
      onChange={onChange}
    />
  )

  expect(testVal).toBe(stepsArray[valIndex])
})
