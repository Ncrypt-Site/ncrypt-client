import './note-options.scss'
import React, { ChangeEvent, useState, useEffect } from 'react'
import { NySwitch } from '../../shared/NySwitch/NySwitch'
import { NySlider } from '../../shared/NySlider/NySlider'

interface NoteOptionsProps {
  // when options changes
  onChange?: (val: {
    destructAfterOpening: boolean
    selfDestruct: number
  }) => void
}

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
export const NoteOptions: React.FC<NoteOptionsProps> = ({ onChange }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selfDestruct, setSelfDestruct] = useState(stepsArray[2])

  const [destructAfterOpening, setDestructAfterOpening] = useState(true)

  const onDestructSwitchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checkbox = e.target

    setDestructAfterOpening(checkbox.checked)
  }

  // const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   const input = e.target

  //   setPassword(input.value)
  // }

  const onExpireChange = (val: number) => {
    setSelfDestruct(val)
  }

  useEffect(() => {
    if (onChange)
      onChange({
        destructAfterOpening,
        selfDestruct,
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selfDestruct, destructAfterOpening])

  return (
    <div className="note-options">
      <h3 className="title hidden-mobile">Options</h3>
      <NySwitch
        defaultChecked
        label="Self-destructs after reading"
        onChange={onDestructSwitchChange}
      />

      <NySlider
        stepsArray={stepsArray}
        marks={stepsMarks}
        label="Expires in"
        onChange={onExpireChange}
        valIndex={0}
      />
    </div>
  )
}
