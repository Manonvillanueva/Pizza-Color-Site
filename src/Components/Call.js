import React from "react";
import whiteStars from "../assets/img/three white stars.png";
import "../Style/call.css";

const Call = () => {
  return (
    <div className="call-container">
      <div className="three-stars-call">
        <img src={whiteStars} alt="three white stars" />
        <p>Call to order</p>
      </div>
      <p>
        Pellentesque eu, pretium quis, sem consequat. Nulla massa quis enim.
        Donec pede justo.
      </p>
      <span>06-56-98-78-87</span>
    </div>
  );
};

export default Call;
