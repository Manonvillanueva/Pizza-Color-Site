import React from "react";
import "../Style/header.css";
import logoPizza from "../assets/img/logo-pizza.png";
import { useLocation } from "react-router-dom";

const Header = ({ displayNav }) => {
  // Récupère le chemin d'URL actuel pour appliquer un style conditionnel sur les spans et sur le bg du header
  const location = useLocation();

  // Variable pour changer la couleur du background des spans du menu hamburger
  const backgroundSpan =
    location.pathname === "/contact" ? "var(--ocre)" : "var(--yellow)";

  return (
    <div
      className="header-color"
      style={{
        background:
          location.pathname === "/contact" ? "var(--yellow)" : "var(--ocre)",
      }}
    >
      <div className="header-container">
        <img className="logo-pizza" src={logoPizza} alt="logo pizza" />
        {/* Le bouton "hamburger", qui déclenche l'affichage ou le masquage de la navigation */}
        <button className="hamburger-menu" onClick={displayNav}>
          {/* Trois spans pour styliser le menu hamburger  */}
          <span
            style={{ background: backgroundSpan }}
            className="hamburger-bar"
          ></span>
          <span
            style={{ background: backgroundSpan }}
            className="hamburger-bar"
          ></span>
          <span
            style={{ background: backgroundSpan }}
            className="hamburger-bar"
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
