import axios from "axios";
import React, { useState } from "react";
import "./rejister.css";
import Reg from "./img/reg.png";

const Register = () => {
  // const [formData, setFormData] = useState({
  //   userName: "",
  //   userMobile: "",
  //   userEmail: "",
  //   userPassword: "",
  //   userAgree: false,
  // });

  // const [errorMessage, setErrorMessage] = useState("");

  // const handleChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   setFormData({
  //     ...formData,
  //     [name]: type === "checkbox" ? checked : value,
  //   });
  // };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await axios.post("http://localhost:5001/users", formData);

  //     if (response.status === 201) {
  //       alert("Registration Successful!");
  //       window.location.href = "/login";
  //     } else {
  //       alert("Registration Failed. Try Again!");
  //     }
  //   } catch (error) {
  //     console.error("Error registering:", error);
  //     setErrorMessage("An error occurred during registration. Please try again.");
  //   }
  // };

  function Register() {
    const history = useNavigate();
    const[user,setUser]=useState({
      userName: "",
    userMobile: "",
    userEmail: "",
    userPassword: "",
    userAgree: false,
    })
  };
const handleInputChange =(e)=>{
  const{name,value}=e.target;
  setUser((PrevUser)=>({...PrevUser,[name]:value}))
};
const handleSubmit = async (e) => {
    e.preventDefault();
    sendRequest()
    .then(()=>{
      alert("Register Success");
      history("/login");
    })
    catch ((error) {
          alert("Error registering:", err.message);
    });
}
  return (
    <div className="register" id="register">
      <div className="pic">
        <img src={Reg} className="regp" alt="register logo" />
      </div>
      <form onSubmit={handleSubmit} className="form">
        <h2 className="regh2">Register</h2>
        <p className="regp">Create a new account by filling the form below.</p>
        <label>
          Your Name:
          <input
            type="text"
            name="userName"
            placeholder="John Doe"
            value={formData.userName}
            onChange={handleChange}
          />
        </label>
        <label>
          Mobile Number:
          <input
            type="text"
            name="userMobile"
            placeholder="123-456-7890"
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
          <input
            type="checkbox"
            name="userAgree"
            checked={formData.userAgree}
            onChange={handleChange}
          />
          I agree to the terms and conditions
        </label>
        <button type="submit">Submit</button>
        {errorMessage && <p className="error">{errorMessage}</p>}
        <p>
          Already have an account? <a href="/login">Login here</a>
        </p>
      </form>
    </div>
  );
};

export default Register;
