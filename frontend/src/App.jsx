import React from 'react'
import { Routes } from 'react-router-dom'
import Navbar from './Navbar'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={d}/>
      </Routes>
    </div>
  )
}

export default App