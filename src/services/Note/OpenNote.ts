import { decryptNote } from '../../helpers/Crypto/Crypto'

interface Note {
  Note: string
}

// todo: needs to check signature
// todo: clean interfaces...
export function OpenNote(note: string, key: string): Note {
  const n = note.split(',')
  if (n.length !== 4) {
    throw new Error('Note data is invalid')
  }

  return decryptNote(n[0], key, n[2])
}