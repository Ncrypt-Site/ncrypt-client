import { OpenNote } from './OpenNote'
import { CreateNote } from './CreateNote'

test("It will open an encrypted note",()=>{
  // mock window.crypto (not sure the best approach but works)
  const crypto = require('crypto');
  // @ts-ignore
  Object.defineProperty(global.self, 'crypto', {
    value: {
      // @ts-ignore
      getRandomValues: arr => crypto.randomBytes(arr.length)
    }
  });


  const message = "You have a problem with authority, Mr. Anderson. You believe you are special," +
    " that somehow the rules do not apply to you. Obviously, you are mistaken."
  const encrypted = CreateNote(message)

  const note = OpenNote(encrypted.Note, encrypted.Key)

  expect(note.Note).toBe(message)
})

test("it will throw an error on an incorrect format note",()=>{
  const malformedNote = "bad,format,note"

  expect(function(){OpenNote(malformedNote,"bad key");})
    .toThrow(new Error('Note data is invalid'))
})