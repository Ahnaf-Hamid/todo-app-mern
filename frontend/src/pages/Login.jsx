import React from "react";

const Login = () => {
  return (
    <div className="border w-96 relative left-40 top-40">
      <form className="flex flex-col gap-2 p-2">
        <input type="text" className="border " />
        <input type="email" className="border " />
        <input type="password" className="border " />
        <button type="submit" className="border">Login</button>
      </form>
    </div>
  );
};

export default Login;
