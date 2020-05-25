import React from 'react'
import { NoteShow } from '../../note/NoteShow/NoteShow'

interface NoteProps {}

export const Note: React.FC<NoteProps> = () => {
  return (
    <div>
      <NoteShow>
        This HTML file is a template. If you open it directly in the browser,
        you will see an empty page. You can add webfonts, meta tags, or
        analytics to this file. The build step will place the bundled scripts
        into the tag. To begin the development, run `npm start` or `yarn start`.
        To create a production bundle, use `npm run build` or `yarn build`.
      </NoteShow>
    </div>
  )
}
