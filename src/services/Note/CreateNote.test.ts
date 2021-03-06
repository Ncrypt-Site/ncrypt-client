import { CreateNote } from './CreateNote'
import { decryptNote } from '../../helpers/Crypto/Crypto'

test('It create secure note', () => {
  // mock window.crypto (not sure the best approach but works)
  const crypto = require('crypto')
  // @ts-ignore
  Object.defineProperty(global.self, 'crypto', {
    value: {
      // @ts-ignore
      getRandomValues: arr => crypto.randomBytes(arr.length)
    }
  })
  const plainNote = 'That’s how it is with people. Nobody cares how it works as long as it works.'

  const note = CreateNote(plainNote)
  const n = note.Note.split(',')

  const decryptedNote = decryptNote(n[0], note.Key, n[2])
  expect(decryptedNote.Note).toBe(plainNote)
})

test('It throws an error if the note is empty', ()=>{
  expect(function(){CreateNote("");})
    .toThrow(new Error('Not can\'t be empty.'))
})