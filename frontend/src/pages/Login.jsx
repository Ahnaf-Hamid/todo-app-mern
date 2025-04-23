import React, { useState } from "react";

const Login = () => {
  const [currentState,setCurrentState] = useState('Signup')

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex justify-center items-center h-screen bg-gray-300">
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-xl w-96 p-8 flex flex-col gap-4 mx-2">
        <h2 className="text-2xl font-semibold text-center text-gray-800">
          {currentState}
        </h2>
        {currentState === 'Signup' && <input type="text" placeholder="Username" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required/>}
        <input type="email" placeholder="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
        <input type="password" placeholder="password" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" required/>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 cursor-pointer">
          {currentState}
        </button>
        {currentState === 'Signup' ? (
          <p className="text-gray-500">Already have an account <span onClick={()=>setCurrentState('Login')} className="text-blue-500 cursor-pointer">Login here</span></p>
        ) : (
          <p className="text-gray-500">Don't have an account <span onClick={()=>setCurrentState('Signup')} className="text-blue-500 cursor-pointer">Signup here</span></p>
        )}
      </form>
    </div>
  );
};

export default Login;

