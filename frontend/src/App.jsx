import React, { useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login'
import Todo from './pages/Todo'
import Navbar from './components/Navbar'
import { ToastContainer } from "react-toastify";

export const backendUrl = 'http://localhost:4000'

const App = () => {
  const [token,setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token') : '')
  return (
    <div>
      <ToastContainer />
      <Navbar setToken={setToken}/>
      <Routes>
        <Route path='/' element={<Login setToken={setToken}/>}/>
        <Route path='/todo-app' element={<Todo token={token}/>}/>
      </Routes>
    </div>
  )
}

export default App