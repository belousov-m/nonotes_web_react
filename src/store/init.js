import { makeObservable, observable, action, flow } from "mobx"
import { NoteApi } from '../api/NoteApi'

class NoteStore {
  notes = []

  constructor (notes) {
    makeObservable(this, {
      notes: observable,
      createNote: action,
      updateNote: action,
      deleteNote: action,
      initNotes: flow,
    })

    this.notes = notes
    this.initNotes()
  }

  async *initNotes() {
    try {
      const { data } = await NoteApi.index()
      this.notes = data.data
      console.log('data.data', this.notes)
    } catch (error) {
      console.error("Не удалось загрузить заметки")
    }
  }

  createNote(note = {title: '', description: ''}, successCallback, errorCallback) {
    const apiSuccessCallback = (note) => {
      this.notes.push(note)
      successCallback()
    }

    NoteApi.create(note, apiSuccessCallback, errorCallback)
  }

  updateNote(noteId, newNote) {
    const noteIndexAtId = this.notes.findIndex((note) => note.id === noteId)
    if (noteIndexAtId > -1 && newNote) {
      this.notes[noteIndexAtId] = newNote
    }
  }

  deleteNote(noteId, successCallback, errorCallback) {
    const apiSuccessCallback = () => {
      const noteIndexAtId = this.notes.findIndex((note) => note.id === noteId)
      if (noteIndexAtId > -1) {this.notes.splice(noteIndexAtId, 1)}
      successCallback()
    }

    const apiErrorCallback = (errors) => {
      errorCallback(errors)
    }

    NoteApi.delete(noteId, apiSuccessCallback, apiErrorCallback)
  }
}

export const noteStore = new NoteStore()