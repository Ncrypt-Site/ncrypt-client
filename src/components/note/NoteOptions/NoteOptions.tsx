import './note-options.scss'
import React, { ChangeEvent, useState, useEffect } from 'react'
import { NySwitch } from '../../shared/NySwitch/NySwitch'
import { NotePassword } from '../NotePassword/NotePassword'
import { NySlider } from '../../shared/NySlider/NySlider'

interface NoteOptionsProps {
  // when options changes
  onChange?: (val: { [key: string]: string | number | boolean }) => void
}

export const NoteOptions: React.FC<NoteOptionsProps> = ({ onChange }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selfDestruct, setSelfDestruct] = useState(true)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [password, setPassword] = useState('')
  const [expire, setExpire] = useState(0)

  const onDestructSwitchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const checkbox = e.target

    setSelfDestruct(!!checkbox.checked)
  }

  const onPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target

    setPassword(input.value)
  }

  const onExpireChange = (val: number) => {
    setExpire(val)
  }

  useEffect(() => {
    if (onChange)
      onChange({
        expire: expire,
        selfDestruct: selfDestruct,
        password: password,
      })
  })

  return (
    <div className="note-options">
      <h3 className="title hidden-mobile">Options</h3>
      <NySwitch
        defaultChecked
        label="Self-destructs after reading"
        onChange={onDestructSwitchChange}
      />

      <NySlider
        stepsArray={[0, 1, 3, 6, 12, 24, 48, 72, 168, 720]}
        marks={{
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
        }}
        label="Expires in"
        onChange={onExpireChange}
      />

      <NotePassword
        className="mt-6"
        placeholder="Enter Password"
        label="Define Password"
        onChange={onPasswordChange}
      />
    </div>
  )
}
