import React from "react";

function Login() {
  return (
    <div className="login-form">
      <form id="form-login">
        <h2>Sign Up</h2>
        <label htmlFor="name">
          Name
          <input type="text" id="name" placeholder="Name" />
        </label>
        <label htmlFor="Email">
          Email
          <input type="text" id="email" placeholder="Email" />
        </label>
        <button type="Submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Login;
