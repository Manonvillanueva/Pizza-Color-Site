import React from "react";
import whiteStars from "../assets/img/three white stars.png";

const Call = () => {
  return (
    <div className="call-container">
      <img src={whiteStars} alt="three white stars" />
      <p>Call to order</p>
      <p>
        Pellentesque eu, pretium quis, sem consequat. Nulla massa quis enim.
        Donec pede justo.
      </p>
      <p>06.56.98.78.87</p>
    </div>
  );
};

export default Call;
