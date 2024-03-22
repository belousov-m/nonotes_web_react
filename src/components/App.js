import React from 'react'
import './App.css'
import Header from './layout/header/Header'
import Main from './layout/main/Main'
import Footer from './layout/footer/Footer'

import { Provider } from "mobx-react"
import { noteStore } from "../store/init"

function App() {
  return (
    <React.Fragment>
      <Header />
      <Provider store={noteStore}>
        <Main />
      </Provider>
      <Footer />
    </React.Fragment>
  )
}

export default App
