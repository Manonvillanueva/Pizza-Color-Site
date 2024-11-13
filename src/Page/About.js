import React from "react";
import parmaPizza from "../assets/img/pizza parma.png";
import star5 from "../assets/img/star 5.png";
import heart from "../assets/img/heart .png";
import threeHearts from "../assets/img/three hearts.png";
import Menu from "../Components/Menu";
import Call from "../Components/Call";
import "../Style/about.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="header-about">
        <div className="bloc-pizza-header">
          <img src={parmaPizza} alt="pizza" />
          <p>Parma ham and arugula</p>
          <p>Tomato base, mozzarella, Parma ham, arugula</p>
          <span>$ 21</span>
        </div>
      </div>

      <div className="business-lunch">
        <div className="left-part-business">
          <div className="round-percent">
            <span>40%</span>
            <p>
              <span>business</span>
              <span>lunch</span>
            </p>
          </div>
          <h2>Where every ingredient tells a story</h2>
          <img src={star5} alt="star" />
        </div>
        <div className="right-part-business">
          <img src={heart} alt="heart" />
        </div>
      </div>

      <div className="menu-about">
        <img src={threeHearts} alt="three hearts" />
        <p>Italy Pizza Menu</p>
        <Menu />
      </div>

      <Call />
    </div>
  );
};

export default About;
