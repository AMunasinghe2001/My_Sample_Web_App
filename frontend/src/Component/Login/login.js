import axios from "axios";
import React, { useState } from "react";
import "./login.css";
import Log from "./img/login.png";

const Login = () => {
  const [formData, setFormData] = useState({
    userEmail: "",
    userPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5001/login", formData);
      console.log(response.data);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="login" id="login">
      <div className="pic">
        <img src={Log} className="logp" alt="login logo" />
      </div>
      <form onSubmit={handleSubmit} className="form">
        <h2 className="logh2">Login</h2>
        <p className="logp">Welcome back! Please enter your details.</p>
        <label>
          Your Email:
          <input
            type="email"
            name="userEmail"
            placeholder="example@gmail.com"
            value={formData.userEmail}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="userPassword"
            placeholder="**********"
            value={formData.userPassword}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
        <p>
          Don't have an account? <a href="/register">Register now</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
