import axios from "axios";
import React, { useState } from "react";
import "./rejister.css";
import Reg from "./img/reg.png";

const Register = () => {
  const [inputs, setInputs] = useState({
    userName: "",
    userPhone: "",
    userGmail: "",
    userPassword: "",
  });

  const [checked, setChecked] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle checkbox changes
  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  /* SEND INPUT DETAILS TO DATABASE */
  const sendRequest = async () => {
    await axios.post("http://localhost:5000/users", {
      userName: String(inputs.userName),
      userPhone: String(inputs.userPhone),
      userGmail: String(inputs.userGmail),
      userPassword: String(inputs.userPassword),
      UserAgree: String(checked),
    }).then((res) => res.data);
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    try {
      await sendRequest();
      alert("Register Successfully");
      window.location.href = "http://localhost:3000/home";
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
            value={inputs.userName}
            onChange={handleChange}
          />
        </label>
        <label>
          Mobile Number:
          <input
            type="text"
            name="userPhone"
            placeholder="07X-XX XX XXX"
            value={inputs.userPhone}
            onChange={handleChange}
          />
        </label>
        <label>
          Your Email:
          <input
            type="email"
            name="userGmail"
            placeholder="example@gmail.com"
            value={inputs.userGmail}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="userPassword"
            placeholder="**********"
            value={inputs.userPassword}
            onChange={handleChange}
          />
        </label>
        <label>
          <input
            type="checkbox"
            name="terms"
            checked={checked}
            onChange={handleCheckboxChange}
            required
          />{" "}
          Agree to Terms
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
