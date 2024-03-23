import React from 'react'
import './NotesList.css'
import NoteCard from '../noteCard/NoteCard'
import { observer } from "mobx-react"
import withStore from '../../../store/withStore'

const NotesList = observer(
  class NotesList extends React.Component {
    constructor(props) {
      super(props)

      this.store = props.store
    }
  
    render() {
      return (
        <div className='notes-list'>
          {this.store.notes?.map((note) => {
            return (
              <NoteCard
                id={note.id}
                key={note.id}
                title={note.attributes.title}
                description={note.attributes.description}
              />
            )
          })}
        </div>
      )
    }
  }
)

export default withStore(NotesList)