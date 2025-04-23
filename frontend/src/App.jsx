import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Navbar'
import Login from './pages/Login'
import Todo from './pages/Todo'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Login />}/>
        <Route path='/todo-app' element={<Todo />}/>
      </Routes>
    </div>
  )
}

export default App