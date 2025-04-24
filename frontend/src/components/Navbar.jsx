import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ setToken }) => {
  const navigate = useNavigate()

  const logOut = () => {
    localStorage.removeItem('token')
    setToken('')
    navigate('/')
  }
  return (
    <div className="bg-gray-400 p-5">
      <div className=" max-w-7xl mx-auto  flex justify-between">
        <h1 className="text-white text-3xl font-mono font-semibold">Todo App</h1>
        <button onClick={logOut} className="text-gray-400 border rounded-full py-2 px-4 bg-white hover:bg-gray-600 hover:text-white cursor-pointer">LogOut</button>
      </div>
    </div>
  );
};

export default Navbar;
