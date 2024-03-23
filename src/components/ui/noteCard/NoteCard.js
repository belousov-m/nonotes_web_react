import React from 'react'
import './NoteCard.css'
import withStore from '../../../store/withStore'
import debounce from 'debounce'

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
    debounce(() => {
      this.store.updateNote(this.props.id, 'title', e.target.value)
    }, 200)
  }

  handleEditDescription(e) {
    debounce(() => {
      this.store.updateNote(this.props.id, 'description', e.target.value)
    }, 200)
  }

  render() {
    return (
      <div className='note-card'>
        <input onInput={this.handleEditTitle.bind(this)} defaultValue={this.props.title} />
        <textarea rows="2" onInput={this.handleEditDescription.bind(this)} defaultValue={this.props.description} />
        <button type="button" onClick={this.handleDelete.bind(this)}>Удалить</button>
      </div>
    )
  }
}

export default withStore(CardFormNote)