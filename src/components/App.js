import React from 'react'
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Header from './layout/header/Header'
import Notes from './pages/notes/Notes'
import About from './pages/about/About'
import './App.css'

import { Provider } from "mobx-react"
import { noteStore } from "../store/init"

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Header />
        <Provider store={noteStore}>
          <main>
            <Routes>
              <Route path="*" element={<Notes />} />
              <Route path="about" element={<About />} />
            </Routes>
          </main>
        </Provider>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
