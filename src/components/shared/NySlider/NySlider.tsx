import './ny-slider.scss'
import React from 'react'
import Slider from 'rc-slider'

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
}

export const NySlider: React.FC<NySliderProps> = ({
  stepsArray,
  onChange,
  marks,
  label,
}) => {
  const handleChange = (val: number) => {
    if (onChange) onChange(stepsArray[val])
  }

  return (
    <div className="mv-5">
      <div className="mb-2">{label}</div>
      <Slider
        className="ml-2"
        min={0}
        max={stepsArray.length - 1}
        marks={marks}
        step={null}
        onChange={handleChange}
        defaultValue={0}
      />
    </div>
  )
}
