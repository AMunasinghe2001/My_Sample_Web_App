import axios from "axios";
import React, { useState } from "react";
import "./rejister.css";
import Reg from "./img/reg.png";

const Register = () => {
    const [formData, setFormData] = useState({
      userName: "",
      userMobile: "",
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
        const response = await axios.post(
          "http://localhost:5001/signup",
          formData
        );
        console.log(response.data);
      } catch (error) {
        console.error("Error signing up:", error);
      }
    };
  
    return (
      <div className="register" id="reg">
        <div className="pic">
          <img src={Reg} className="regp" alt="signin logo" />
        </div>
        <form onSubmit={handleSubmit} className="Rform">
          <h2 className="regh2">Create Account</h2>
          <p className="regp">
            Welcome to Our Family! Please enter your details.
          </p>
          <label>
            Full Name:
            <input
              type="text"
              name="userName"
              placeholder="Full Name"
              value={formData.userName}
              onChange={handleChange}
            />
          </label>
          <label>
            Mobile Number:
            <input
              type="text"
              name="userMobile"
              placeholder="07X-XX XX XXX"
              value={formData.userMobile}
              onChange={handleChange}
            />
          </label>
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
          <label>
            <input type="checkbox" name="terms" required /> Agree to Terms
          </label>
          <button type="submit">Submit</button>
          <p>
            Already have an account? <a href="/login">Log in now</a>
          </p>
        </form>
      </div>
    );
  };
  
  export default Register;