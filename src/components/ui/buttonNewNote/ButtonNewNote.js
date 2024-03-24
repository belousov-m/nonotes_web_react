import React from 'react'
import Dialog from '../../layout/dialog/Dialog'
import CardFormNote from '../cardFormNote/CardFormNote'
import { GoPlus } from "react-icons/go";

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
      <div>
        <button className="button-new-note" type="button" onClick={() => this.openDialog()}>
          <GoPlus className="button-new-note__icon"/>
        </button>
  
        <Dialog name={this.dialogName}>
          <CardFormNote submitCallback={this.handleSubmit.bind(this)} />
        </Dialog>
      </div>
    )
  }
}

export default ButtonNewNote