import './note-loading.scss'
import React from 'react'
import gridColored from '../../../assets/grid-colored.svg'

export const NoteLoading: React.FC = ({}) => {
  return (
    <div className="note-loading">
      <img className="loading-image" src={gridColored} alt="loading..." />
    </div>
  )
}
