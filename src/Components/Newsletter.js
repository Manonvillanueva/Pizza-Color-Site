import React from "react";
import imgNewsletter from "../assets/img/basilic and pizza.jpeg";
import heart from "../assets/img/heart .png";
import "../Style/newsletter.css";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      {/* LEFT PART  */}
      <div className="left-part-news">
        <div className="newsletter">
          <h2>Newsletter</h2>
          <p>
            Nulla consequat massa quis enim. Donec pede justo fringilla vel.
          </p>
          <p>
            Excellent pizza at a fair price. The restaurant does delivery and
            has some tables to stay. It's not big but worth to buy pizza there.
            The pleasure of having a pizza that just left the wood oven is
            awesome!
          </p>
          <form className="submit-container">
            <input type="email" placeholder="Enter a valid email address" />
            <button type="submit">submit</button>
          </form>
        </div>
      </div>

      {/* RIGHT PART  */}
      <div className="right-part-news">
        <img src={imgNewsletter} alt="pizza" className="img-newsletter" />
        <img className="heart-right-part-news" src={heart} alt="heart" />
      </div>
    </div>
  );
};

export default Newsletter;
