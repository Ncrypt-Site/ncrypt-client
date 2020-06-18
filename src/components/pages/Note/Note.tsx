import './note.scss'
import React, { useState, ChangeEvent, useEffect } from 'react'
import { NoteShow } from '../../note/NoteShow/NoteShow'
import { NotePassword } from '../../note/NotePassword/NotePassword'
import { NyButton } from '../../shared/NyButton/NyButton'
import Icon from '@mdi/react'
import { mdiLock } from '@mdi/js'
import axios,{AxiosResponse} from 'axios'
import { useParams } from 'react-router'
import { OpenNote } from '../../../services/Note/OpenNote'
import { toast } from 'react-toastify'
import {
  useAsync,
  IfPending,
  IfFulfilled,
  IfRejected,
  PromiseFn,
} from 'react-async'
import { NoteError } from '../../note/NoteError/NoteError'
import { NoteLoading } from '../../note/NoteLoading/NoteLoading'

interface NoteProps {}

const getNote: PromiseFn<{ Data: { note: string } }> = ({ id }) =>
  axios
    .get(`https://api.ncrypt.site/api/v1/note/${id}`)
    .then((res) => Promise.resolve(res))
    .then(({ data }) => data)
    .catch((err) => {
      return Promise.reject(err)
    })

export const Note: React.FC<NoteProps> = () => {
  const { id } = useParams()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false)
  const [password, setPassword] = useState('')
  const [errorResponse, setErrorResponse] = useState<AxiosResponse | null>(null)
  const [text, setText] = useState<string | null | undefined>(null)
  const [note, setNote] = useState<string>('')
  const state = useAsync(getNote, { id })
  const { data, error } = state

  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const input = e.target

    setPassword(input.value)
  }

  useEffect(() => {
    if (data) {
      // todo: make it better
      if (data && data.Data && data.Data.note) {
        setNote(data.Data.note)
      }
    }

    if (error) {
      // @ts-ignore
      setErrorResponse(error.response)

      console.error(error)
    }
  }, [error, data])

  const clickHandler = () => {
    if (password) {
      try {
        const n = OpenNote(note, password)
        setText(n.Note)
        toast('🗝 Note Opened successfully')
      } catch (err) {
        toast.error('It seems that password is not matched')
        console.error(err)
      }
    } else {
      toast.error('Password needed!')
    }
  }

  return (
    <>
      <IfPending state={state}>
        <NoteLoading />
      </IfPending>
      <IfRejected state={state}>
        <NoteError response={errorResponse} />
      </IfRejected>
      <IfFulfilled state={state}>
        <div className="note-page">
          <NoteShow blur={!text}>
            {text && text}
            {!text &&
              `
          Lorem ipsum dolor, sit amet consectetur adipisicing 
          elit. Tenetur, optio ab, cumque asperiores, amet voluptates assumenda 
          labore expedita architecto quaerat consectetur sed repudiandae eligendi? Nisi
           perferendis quia similique labore excepturi.
          `}
          </NoteShow>

          {!text && (
            <div className="password-box">
              <NotePassword
                placeholder="Enter Password"
                label="Enter the password to open the Note"
                onChange={passwordHandler}
              />

              <NyButton onClick={clickHandler} loading={loading}>
                <Icon
                  path={mdiLock}
                  size="1rem"
                  style={{ marginRight: '0.25rem' }}
                />
                Open Note
              </NyButton>
            </div>
          )}
        </div>
      </IfFulfilled>
    </>
  )
}
