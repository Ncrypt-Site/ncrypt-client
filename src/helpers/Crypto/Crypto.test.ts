import { encryptNote, decryptNote } from './Crypto'

test('It can encrypt and decrypt a note', () => {
  // mock window.crypto (not sure the best approach but works)
  const crypto = require('crypto');
  // @ts-ignore
  Object.defineProperty(global.self, 'crypto', {
    value: {
      // @ts-ignore
      getRandomValues: arr => crypto.randomBytes(arr.length)
    }
  });

  const note = 'I don’t like the idea that I’m not in control of my life.'

  const secureNote = encryptNote(note)
  const decryptedNote = decryptNote(secureNote.Note, secureNote.Key, secureNote.Iv)

  expect(decryptedNote.Note).toBe(note)
})