import ButtonNewNote from '../../ui/buttonNewNote/ButtonNewNote'
import NotesList from '../../ui/notesList/NotesList'
import './Notes.css'

function Notes() {
  return (
    <div className='notes-page'>
      <div className='button-new-note-container'>
        <ButtonNewNote />
      </div>

      <div className='notes-list-container'>
        <NotesList />
      </div>
    </div>
  )
}

export default Notes
