import { GenerateRandomString } from '../../helpers/RandomString/RandomString'
import { encryptNote } from '../../helpers/Crypto/Crypto'
import * as CryptoJS from 'crypto-js'

interface EncryptedNote {
  Note: string
  Key: string
}

export function CreateNote(note: string): EncryptedNote {
  if (note.length === 0) {
    throw new Error('Not can\'t be empty.')
  }

  const noteSHA256 = CryptoJS.SHA256(note)

  const key = GenerateRandomString(32)
  const iv = GenerateRandomString(16)

  const encryptedNote = encryptNote(note, key, iv)

  const n = {
    Note: encryptedNote.Note + ',' + noteSHA256 + ',' + encryptedNote.Iv,
    Key: encryptedNote.Key
  }

  const encryptedNoteSHA256 = CryptoJS.SHA256(n.Note)
  n.Note = n.Note+","+encryptedNoteSHA256

  return n
}