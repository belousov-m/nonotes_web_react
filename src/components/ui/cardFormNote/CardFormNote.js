import React from 'react'
import { NoteApi } from '../../../api/NoteApi'
import './CardFormNote.css'

class CardFormNote extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: {}
    }
  }

  async handleSubmit(e) {
    e.preventDefault()
    
    const form = e.target;
    const formData = new FormData(form)
    let note = {}

    for (const [key, value] of formData) { note[key] = value }

    try {
      await NoteApi.create(note)
      this.props.submitCallback()
    } catch (error) {
      this.setState({errors: error.response.data.errors})
    }
  }

  handleFocus(e) {
    let newErrors = this.state.errors
    newErrors[e.target.name] = null
    this.setState({errors: newErrors})
  }

  render() {
    let titleError = this.state.errors.title ? <div className="field-error">{this.state.errors.title}</div> : null
    let descriptionError = this.state.errors.description ? <div className="field-error">{this.state.errors.description}</div> : null
    
    return (
      <div className='card-form-note'>
        <form method="post" onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <input name="title" autoComplete="off" onFocus={(e) => this.handleFocus(e)} />
            {titleError}

            <textarea name="description" rows="4" onFocus={(e) => this.handleFocus(e)} />
            {descriptionError}
          </div>

          <button type="submit">Добавить</button>
          <button type="reset">Очистить</button>
        </form>
      </div>
    )
  }
}

export default CardFormNote