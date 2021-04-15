import axios from "axios";
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();

  // #2 - Create state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // #6 - show error to user
  const [error, setError] = useState("");

  // #4 - create submit function
  const submit = async (e) => {
    e.preventDefault();
    console.log(name, email, password);

    try {
      // #5 - axios post -> see API documentation
      const post = await axios.post(
        "https://portfolio-builder-oh.herokuapp.com/signup",
        {
          name,
          email,
          password,
        }
      );

      // #6 - error handling
      if (post.data.error) {
        throw new Error(post.data.error);
      }

      // #7 - success handling
      // #7a - store token to local storage
      localStorage.setItem("id", post.data.data);

      // #7b - redirect user to homepage
      history.push("/");

      console.log("success", post);
    } catch (error) {
      console.log("error", error.message);
      setError(error.message);
    }
  };

  return (
    <div className="auth-wrapper">
      <div className="auth-card">
        <h1>Sign up</h1>
        {/* #1 - Create form UI */}
        <form onSubmit={submit} className="form">
          <div>
            <label for="name">Name</label>
            <input
              id="name"
              // #3 - add onchange and value
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label for="email">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {/* #6 - show error to user */}
          <div>{error}</div>
          <button type="submit">Signup</button>
        </form>
        <div className="link-toggle">
          Already have account? <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
