import React from "react";
import imgNewsletter from "../assets/img/basilic and pizza.jpeg";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <div className="left-part-news">
        <h2>Newsletter</h2>
        <p>Nulla consequat massa quis enim. Donec pede justo fringilla vel.</p>
        <p>
          Excellent pizza at a fair price. The restaurant does delivery and has
          some tables to stay. It's not big but worth to buy pizza there. The
          pleasure of having a pizza that just left the wood oven is awesome!
        </p>
        <input type="email" name="" id="" />
        <button type="submit">submit</button>
      </div>
      <div className="right-part-news">
        <img src={imgNewsletter} alt="pizza" />
      </div>
    </div>
  );
};

export default Newsletter;
