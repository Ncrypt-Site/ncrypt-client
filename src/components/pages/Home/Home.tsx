/* eslint-disable @typescript-eslint/no-unused-vars */
import './home.scss'
import React, { useState, ChangeEvent, FormEvent } from 'react'
import { Hero } from '../../decorative/MainHero/MainHero'
import { NoteEditor } from '../../note/NoteEditor/NoteEditor'
import { NoteOptions } from '../../note/NoteOptions/NoteOptions'
import { NyButton } from '../../shared/NyButton/NyButton'
import Icon from '@mdi/react'
import { mdiLock } from '@mdi/js'
import Art from '../../../assets/art.svg'
import axios, { AxiosResponse } from 'axios'
import { CreateNote } from '../../../services/Note/CreateNote'
import { NoteSent } from '../../home/NoteSent/NoteSent'

interface NoteOptionsInterface {
  message: string
  self_destruct?: number
  destruct_after_opening?: boolean
}

interface ServerResponse {
  data: ServerData
}

interface ServerData {
  foo: string
  bar: number
}

const postNote = (options: NoteOptionsInterface) =>
  axios
    .post(`https://api.ncrypt.site/api/v1/note`, options)
    .then((res) => {
      return Promise.resolve(res)
    })
    .catch((err) => {
      return Promise.reject(err)
    })

export const Home: React.FC = () => {
  const [text, setText] = useState<string | null>(null)
  const [key, setKey] = useState<string | null>(null)
  const [noteId, setNoteId] = useState<string | null>(null)
  const [noteUrl, setNoteUrl] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const [options, setOptions] = useState<{
    destructAfterOpening: boolean
    selfDestruct: number
  } | null>(null)

  const noteChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target
    setText(textarea.value)
  }

  const optionsChangeHandler = (valObject: {
    destructAfterOpening: boolean
    selfDestruct: number
  }) => {
    setOptions(valObject)
  }

  const doesHaveID = (res: any) =>
    !!(res && res.data && res.data.Data && res.data.Data)

  const formSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (text) {
      const { Note, Key } = CreateNote(text)
      setKey(Key)

      if (options) {
        setLoading(true)
        postNote({
          message: Note,
          destruct_after_opening: options.destructAfterOpening,
          self_destruct: options.selfDestruct,
        })
          .then((response: any) => {
            if (doesHaveID(response)) {
              const { data } = response
              setNoteId(data.Data.id)
              setNoteUrl(data.Data.url)
            }
          })
          .finally(() => {
            setLoading(false)
          })
      }
    }
  }

  if (noteUrl !== null && key !== null)
    return <NoteSent noteKey={key} noteUrl={noteUrl} />
  else
    return (
      <div className="page-home">
        <Hero />
        <form action="" onSubmit={formSubmit}>
          <NoteEditor disabled={loading} onChange={noteChangeHandler} />
          <div className="actions">
            <NoteOptions onChange={optionsChangeHandler} />
            <NyButton loading={loading}>
              <Icon path={mdiLock} size="1rem" />
              Encrypt and send
            </NyButton>
          </div>
        </form>
        <img src={Art} alt="art" className="art hidden-mobile" />
      </div>
    )
}
