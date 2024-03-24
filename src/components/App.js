import React from 'react'
import './App.css'
import Header from './layout/header/Header'
import Notes from './pages/notes/Notes'

import { Provider } from "mobx-react"
import { noteStore } from "../store/init"

function App() {
  return (
    <React.Fragment>
      <Header />
      <Provider store={noteStore}>
        <main>
          <Notes />
        </main>
      </Provider>
    </React.Fragment>
  )
}

export default App
