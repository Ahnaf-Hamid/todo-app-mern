import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { backendUrl } from '../App'

const Todo = ({ token }) => {
  const [task,setTask] = useState('')
  const [getTodo,setGetTodo] = useState([])

  const addTodo = async () => {
    try {
      const response = await axios.post(`${backendUrl}/api/todo/add`,{ task },{headers: {token}})
      // console.log(response.data)

      if(response.data.success){
        console.log(response.data)
      }
    } catch (error) {
      console.log(error);
    }
  }

  const getUserTodo = async () => {
    try {
      const response = await axios.post(`${backendUrl}/api/todo/get`,{},{headers: {token}})
      console.log(response.data);
      
      if(response.data.success){
        setGetTodo(response.data.todos)
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getUserTodo();
  },[])
  return (
    <div className='bg-gray-300 flex justify-center items-center min-h-screen'>
      <div className='bg-white shadow-lg rounded-xl w-lg p-8 flex flex-col gap-4 mx-2'>
        <h1 className='text-center text-2xl font-semibold font-serif'>TODO LIST</h1>

        <div className='flex items-center gap-2'>
          <input type="text" onChange={(e)=>setTask(e.target.value)} value={task} className='flex-1 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800' placeholder='Enter a task' />
          <button onClick={addTodo} className='bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 cursor-pointer'>Add</button>
        </div>

        <div className="w-full mt-4 p-4 ">
          {getTodo.map((item,index)=>{
            return (
              <ul key={index} className='flex items-center justify-between gap-4'>
                <li className='font-semibold text-lg'>{item.todo}</li>
                <button className='text-red-500 hover:text-red-700 font-bold cursor-pointer'>X</button>
              </ul>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Todo