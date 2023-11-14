import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://phase-2-backend-json-server-template.onrender.com/Login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        navigate("/Home");
      } else {
        console.error("Login failed:", response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-form" id="login-form">
      <form id="login" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label htmlFor="name">
          Name
          <input
            autoComplete="name"
            required
            type="text"
            id="name"
            placeholder="Name"
            name="name"
            onChange={handleChange}
            value={formData.name}
          />
        </label>
        <br></br>
        <label htmlFor="email">
          Email
          <input
            autoComplete="Email"
            required
            type="text"
            id="email"
            placeholder="Email"
            name="email"
            onChange={handleChange}
            value={formData.email}
          />
        </label>
        <br></br>
        <label htmlFor="password">
          Passw
          <input
            autoComplete="password"
            required
            type="password"
            id="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
            value={formData.password}
          />
        </label>
        <br></br>
        <div className="submit">
          <button id="submit" type="Submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
