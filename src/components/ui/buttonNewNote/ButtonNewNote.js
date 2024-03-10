import React from 'react'
import Dialog from '../../layout/dialog/Dialog'
import CardFormNote from '../cardFormNote/CardFormNote'

import './ButtonNewNote.css'


class ButtonNewNote extends React.Component {
  dialogName = "new-note"
  
  openDialog() {
    document.getElementById(this.dialogName)?.showModal()
  }

  render() {
    return (
      <div className="button-new-note">
        <button type="button" onClick={() => this.openDialog()}>Добавить заметку</button>
  
        <Dialog name={this.dialogName}>
          <CardFormNote />
        </Dialog>
      </div>
    )
  }
}

export default ButtonNewNote