import { encryptNote, decryptNote } from './Crypto'

test('It can encrypt and decrypt a note', () => {
  const key = 'Yh5rEdo2W75zl3qfYh5rEdo2W75zl3qf'
  const iv = 'Yh5rEdo2W75zl3qf'
  const note = 'I don’t like the idea that I’m not in control of my life.'

  const secureNote = encryptNote(note, key, iv)
  const decryptedNote = decryptNote(secureNote.Note, secureNote.Key, secureNote.Iv)

  expect(decryptedNote.Note).toBe(note)
})