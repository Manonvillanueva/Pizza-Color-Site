import React from "react";
import "../Style/navigation.css";

const Navigation = ({ visible }) => {
  const navLi = ["Home", "About", "Contact"];

  return (
    <div className={`nav-container ${visible ? "visible" : ""}`}>
      <div className="closeNav"></div>
      <ul>
        {navLi.map((li) => {
          return <li key={li}>{li}</li>;
        })}
      </ul>
    </div>
  );
};

export default Navigation;
