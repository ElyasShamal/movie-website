import React from "react";

function Login() {
  return (
    <div className="login-form">
      <form id="login">
        <h2>Sign Up</h2>
        <label htmlFor="name">
          Name
          <input type="text" id="name" placeholder="Name" />
        </label>
        <br></br>
        <label htmlFor="email">
          Email
          <input type="text" id="email" placeholder="Email" />
        </label>
        <br></br>
        <label htmlFor="password">
          Passw
          <input type="password" id="password" placeholder="Password" />
        </label>
        <br></br>
        <div className="submit">
          <button id="submit" type="Submit">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
