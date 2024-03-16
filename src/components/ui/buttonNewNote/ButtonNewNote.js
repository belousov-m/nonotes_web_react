import React from 'react'
import Dialog from '../../layout/dialog/Dialog'
import CardFormNote from '../cardFormNote/CardFormNote'

import './ButtonNewNote.css'

class ButtonNewNote extends React.Component {
  constructor(props) {
    super(props)
    this.dialogName = "new-note"
  }
  
  openDialog() {
    document.getElementById(this.dialogName)?.showModal()
  }
  
  handleSubmit () {
    document.getElementById(this.dialogName)?.close()
  }

  render() {
    return (
      <div className="button-new-note">
        <button type="button" onClick={() => this.openDialog()}>Добавить заметку</button>
  
        <Dialog name={this.dialogName}>
          <CardFormNote submitCallback={this.handleSubmit.bind(this)} />
        </Dialog>
      </div>
    )
  }
}

export default ButtonNewNote