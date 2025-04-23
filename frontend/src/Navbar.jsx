import React from "react";

const Navbar = () => {
  return (
    <div className="bg-gray-400 p-5">
      <div className=" max-w-7xl mx-auto  flex justify-between">
        <h1 className="text-white text-3xl font-mono font-semibold">Todo App</h1>
        <button className="text-gray-400 border rounded-full py-2 px-4 bg-white hover:bg-gray-600 hover:text-white cursor-pointer">LogOut</button>
      </div>
    </div>
  );
};

export default Navbar;
