import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1>Login</h1>
        <form className="form">
          <div>
            <label for="email">Email</label>
            <input id="email" />
          </div>
          <div>
            <label for="password">Password</label>
            <input id="password" />
          </div>
          <button>Login</button>
        </form>
        <div className="link-toggle">
          Don't have account? <Link to="/signup">Sign up</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
