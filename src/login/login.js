import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1 className="title">Log In</h1>
      <textarea placeholder="username"></textarea>
      <textarea placeholder="password"></textarea>

      <Link to="/userhome">
        <button>Log In</button>
      </Link>
    </div>
  );
};

export default Login;
