import React from 'react'
import './Dialog.css'

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

        <menu>
          <button id="cancel" onClick={() => this.close()}>close</button>
        </menu>
      </dialog>
    )
  }
}

export default Dialog