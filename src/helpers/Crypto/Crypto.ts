import * as CryptoJS from 'crypto-js'
import { GenerateRandomString } from '../RandomString/RandomString'

interface SecureNote {
  Key: string
  Iv: string
  Note: string
}

export function encryptNote(note: string): SecureNote {
  const key = CryptoJS.enc.Utf8.parse(GenerateRandomString(32))
  const iv = CryptoJS.enc.Utf8.parse(GenerateRandomString(16))

  const encryptedNote = CryptoJS.AES.encrypt(note, key, {
    mode: CryptoJS.mode.CTR,
    iv: iv,
    padding: CryptoJS.pad.NoPadding
  })

  return {
    Key: CryptoJS.enc.Base64.stringify(key),
    Iv: CryptoJS.enc.Base64.stringify(key),
    Note: encryptedNote.toString()
  }
}
