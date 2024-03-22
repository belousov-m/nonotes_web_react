import React from 'react'
import './NoteCard.css'
import withStore from '../../../store/withStore'

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

  render() {
    return (
      <div className='note-card'>
        <span contentable="">{this.props.title}</span>
        <p>{this.props.description}</p>

        <button type="button" onClick={this.handleDelete.bind(this)}>Удалить</button>
      </div>
    )
  }
}

export default withStore(CardFormNote)