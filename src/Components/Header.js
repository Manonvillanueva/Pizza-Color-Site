import React from "react";
import "../Style/header.css";
import logoPizza from "../assets/img/logo-pizza.png";

const Header = ({ displayNav }) => {
  return (
    <div className="header-container">
      <img className="logo-pizza" src={logoPizza} alt="logo pizza" />
      <button className="hamburger-menu" onClick={displayNav}>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>
    </div>
  );
};

export default Header;
