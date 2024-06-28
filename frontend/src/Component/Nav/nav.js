import React from "react";
import "./nav.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faUserShield,
  faUsers,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar">
      <div>
        <h1 className="navh1">Sample Web</h1>
      </div>

      <div className="conten">
        <a href="#home">
          <FontAwesomeIcon icon={faHome} className="icon" />
          <span className="text">Home</span>
        </a>
        <a href="#admin">
          <FontAwesomeIcon icon={faUserShield} className="icon" />
          <span className="text">Admin</span>
        </a>
        <a href="#staff">
          <FontAwesomeIcon icon={faUsers} className="icon" />
          <span className="text">Staff</span>
        </a>
        <a href="profile">
          <FontAwesomeIcon icon={faUser} className="icon" />
          <span className="text">Profile</span>
        </a>
      </div>

      <div className="logout">
        <a href="bhome">
          <FontAwesomeIcon icon={faSignOutAlt} className="icon" />
          <span className="text">Log Out</span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
