import React from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import './CardFormNote.css'
import withStore from '../../../store/withStore'

class CardFormNote extends React.Component {
  constructor(props) {
    super(props)

    this.state = { errors: {}}

    this.store = props.store
  }

  async handleSubmit(e) {
    e.preventDefault()
    
    const form = e.target;
    const formData = new FormData(form)
    let note = {}
    
    for (const [key, value] of formData) { note[key] = value }
    
    const successCallback = () => {
      form.reset()
      this.props.submitCallback()
    }

    const errorCallback = (error) => {
      this.setState({errors: error.response.data.errors})
    }

    this.store.createNote(note, successCallback, errorCallback)
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
            <input name="title" placeholder="Название" autoComplete="off" onFocus={(e) => this.handleFocus(e)} />
            {titleError}

            <TextareaAutosize name="description" minRows="10" maxRows="15" placeholder="Текст" onFocus={(e) => this.handleFocus(e)} />
            {descriptionError}
          </div>
          
          <div className='card-form-note__actions'>
            <button className="primary" type="submit">Добавить</button>
            <button className="primary" type="reset">Очистить</button>
          </div>
        </form>
      </div>
    )
  }
}

export default withStore(CardFormNote)