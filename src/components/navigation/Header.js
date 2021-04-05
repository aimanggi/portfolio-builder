import React from "react";
import logo from "../../assets/img/logo.svg";

const Header = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <div className="menu">
        <a href="/" className="link">
          Portfolio
        </a>
        <a href="/" className="link">
          About
        </a>
        <a href="/" className="link">
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Header;
