import React from 'react'
import debounce from 'debounce'
import TextareaAutosize from 'react-textarea-autosize'
import { GoTrash } from "react-icons/go";
import withStore from '../../../store/withStore'
import './NoteCard.css'

class CardFormNote extends React.Component {
  constructor(props) {
    super(props)

    this.store = props.store
  }

  handleDelete() {
    const successCallback = () => {
      // action after delete
    }

    const errorCallback = (error) => {
      console.error('Не удалось удалить заметку', error)
    }

    this.store.deleteNote(this.props.id, successCallback, errorCallback)
  }

  handleEditTitle(e) {
    this.store.updateNote(this.props.id, 'title', e.target.value)
    
    // debounce(() => {
    //   this.store.updateNote(this.props.id, 'title', e.target.value)
    // }, 200)
  }

  handleEditDescription(e) {
    this.store.updateNote(this.props.id, 'description', e.target.value)

    // debounce(() => {
    //   this.store.updateNote(this.props.id, 'description', e.target.value)
    // }, 200)
  }

  render() {
    return (
      <div className='note-card'>
        <input onInput={this.handleEditTitle.bind(this)} defaultValue={this.props.title} />
        <TextareaAutosize maxRows="10" onInput={this.handleEditDescription.bind(this)} defaultValue={this.props.description} />
        <GoTrash className='note-card__delete' onClick={this.handleDelete.bind(this)} />
      </div>
    )
  }
}

export default withStore(CardFormNote)