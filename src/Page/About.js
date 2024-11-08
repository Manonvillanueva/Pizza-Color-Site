import React, { useState } from "react";
import Header from "../Components/Header";
import parmaPizza from "../assets/img/pizza parma.png";
import basilicAndPizza from "../assets/img/basilic and pizza.jpeg";
import star5 from "../assets/img/star 5.png";
import heart from "../assets/img/heart .png";
import Menu from "../Components/Menu";
import Call from "../Components/Call";

const About = () => {
  return (
    <div className="about-container">
      <div className="header-about">
        <img src={parmaPizza} alt="pizza" />
        <div>
          <p>Parma ham and arugula</p>
          <p>Tomato base, mozzarella, Parma ham, arugula</p>
          <span>$ 21</span>
        </div>
      </div>

      <div className="business-lunch">
        <div className="left-part-business">
          <p>
            <span>40%</span>
            business lunch
          </p>
          <h2>Where every ingredient tells a story</h2>
          <img src={star5} alt="star" />
        </div>
        <div className="right-part-business">
          <img src={basilicAndPizza} alt="pizza" />
          <img src={heart} alt="heart" />
        </div>
      </div>

      <div className="menu-about">
        <img src="" alt="" />
        <p>Italy Pizza Menu</p>
        <Menu />
      </div>

      <Call />
    </div>
  );
};

export default About;
