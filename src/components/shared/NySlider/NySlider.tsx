import './ny-slider.scss'
import React, { useState, useEffect } from 'react'
import { Range } from 'react-range'
import { mdiMenuUp } from '@mdi/js'
import Icon from '@mdi/react'

interface NySliderProps {
  onChange?(val: number): void
  stepsArray: Array<number>
  marks: {
    [number: number]:
      | JSX.Element
      | string
      | { style: any; label: string | JSX.Element }
  }
  label?: string
  valIndex?: number
}

export const NySlider: React.FC<NySliderProps> = ({
  stepsArray,
  onChange,
  marks,
  label,
  valIndex,
}) => {
  const [localVal, setLocalVal] = useState([valIndex || 0])

  const handleChange = (val: number[]) => {
    setLocalVal(val)
  }

  useEffect(() => {
    if (onChange) onChange(stepsArray[localVal[0]])
  },[localVal, onChange, stepsArray])

  return (
    <div className="mv-5 ny-slider" data-testid="ny-slider">
      <div className="mb-2">{label}</div>

      <Range
        step={1}
        min={0}
        max={stepsArray.length - 1}
        values={localVal}
        onChange={handleChange}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
            }}
            className="range-track"
          >
            {children}
          </div>
        )}
        renderThumb={({ props, value }) => (
          <div
            {...props}
            style={{
              ...props.style,
            }}
            className="range-thumb"
          >
            <span
              className={`thumb-value ${value === 0 ? 'first' : ''} ${
                value === stepsArray.length - 1 ? 'last' : ''
              }`}
            >
              <Icon path={mdiMenuUp} />
              {marks[value]}
            </span>
          </div>
        )}
      />
    </div>
  )
}
