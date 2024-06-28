import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Component/Register/register.js";
import Login from "./Component/Login/login.js";
import BHome from "./Component/BHome/bhome.js";
import Home from "./Component/Home/home.js";
import Profile from "./Component/Profile/profile.js";
// import Bashitha from "./Component/bashitha test/bashitha.js";

function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bhome" element={<BHome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route path="/bashitha" element={<Bashitha />} /> */}
        </Routes>
      
    </div>
  );
}

export default App;
