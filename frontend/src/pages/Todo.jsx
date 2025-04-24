import React from 'react'

const Todo = () => {
  return (
    <div className='bg-gray-300 flex justify-center items-center min-h-screen'>
      <div className='bg-white shadow-lg rounded-xl w-lg p-8 flex flex-col gap-4 mx-2'>
        <h1 className='text-center text-2xl font-semibold font-serif'>TODO LIST</h1>

        <div className='flex items-center gap-2'>
          <input type="text" className='flex-1 border rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-800' placeholder='Enter a task' />
          <button className='bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 cursor-pointer'>Add</button>
        </div>

        
      </div>
    </div>
  )
}

export default Todo