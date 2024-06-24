import React from "react";
import { Route, Routes } from "react-router-dom";
import Register from "./Component/Register/register.js";
import Login from "./Component/Login/login.js";
import BHome from "./Component/BHome/bhome.js";

function App() {
  return (
    <div className="App">
      <React.Fragment>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/bhome" element={<BHome />} />
        </Routes>
      </React.Fragment>
    </div>
  );
}

export default App;
