import React from "react";
import "../Style/navigation.css";
import { NavLink } from "react-router-dom";

const Navigation = ({ visible, displayNav }) => {
  // léments de la navigation
  const navLi = ["Home", "About", "Contact"];

  return (
    <div className={`nav-container ${visible && "visible"}`}>
      {/* Fermeture de la navigation*/}
      <div className="close-nav" onClick={displayNav}>
        <div class="line1"></div>
        <div class="line2"></div>
      </div>
      <ul>
        {/* Création de la liste d'éléments de la nav  */}
        {navLi.map((li) => {
          return (
            <li key={li}>
              <NavLink
                className="navLink-navigation"
                onClick={displayNav}
                to={`/${li.toLocaleLowerCase()}`}
              >
                {li}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navigation;
