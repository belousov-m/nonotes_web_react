import React from 'react'
import './Dialog.css'
import { GoX } from "react-icons/go";

class Dialog extends React.Component {
  constructor (props) {
    super(props)
    this.dialogName = props.name
  }

  close() {
    document.getElementById(this.dialogName)?.close()
  }

  render () {
    return(
      <dialog id={this.dialogName}>
        <div className="dialog-slot">
          {this.props.children}
        </div>

        <div className="dialog-close-icon">
          <GoX onClick={() => this.close()} />
        </div>
      </dialog>
    )
  }
}

export default Dialog