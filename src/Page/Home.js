import React, { useState } from "react";
import Header from "../Components/Header";
import slicePizza from "../assets/img/slice pizza.png";
import megaPizza from "../assets/img/pizza .png";
import pizzaFull from "../assets/img/pizza full.png";
import funFactImg from "../assets/img/woman pizza.jpg";
import Newsletter from "../Components/Newsletter";
import Menu from "../Components/Menu";
import "../Style/home.css";

const Home = () => {
  return (
    <div className="home-container">
      <div className="header-accueil">
        <div className="title-container">
          <h1>Pizza Di Roma</h1>
          <p>From Italy With Love</p>
          <p>From 10:00 PM Everyday</p>
        </div>
        <div className="pizza-header-accueil">
          <img src={slicePizza} alt="part de pizza" />
          <img src={megaPizza} alt="pizza" />
        </div>
      </div>

      <div className="story-pizza">
        <div className="left-part-story">
          <h2>Things you must know about pizza</h2>
          <p>
            The story of pizza is a long one. From the Greeks to the Egyptians,
            from the Persians to the Indians, there have been incarnations of
            pizza served throughout history. Flatbreads, naan, and plakountos
            are all early preparations that could be considered cousins to the
            modern pizza, but there isn’t a consensus as to which is first and
            whether these could even be considered precursors to pizza at all.
          </p>
        </div>
        <div className="right-part-story">
          <img src={pizzaFull} alt="pizza" />
        </div>
      </div>

      <div className="fun-fact">
        <div className="left-fun-fact">
          <img src={funFactImg} alt="pizza" />
        </div>
        <div className="right-fun-fact">
          <h2>The World's Most Popular Food Headline</h2>
          <p>
            Fun Facts about Pizza: The World's Most Popular Food Headline The
            story of pizza is a long one. From the Greeks to the Egyptians, from
            the Persians to the Indians, there have been incarnations of pizza
            served throughout history. Flatbreads, naan, and plakountos are all
            early preparations that could be considered cousins to the modern
            pizza, but there isn’t a consensus as to which is first and whether
            these could even be considered precursors to pizza at all. Have you
            tasted our all-time-popular items?
          </p>
        </div>
      </div>

      <div className="contact-accueil">
        <p>
          Have you tasted our all-time-popular items? Must try, we promise! :)
        </p>
        <button>our contact</button>
      </div>

      <Menu />

      <div className="customer-review"></div>

      <Newsletter />
    </div>
  );
};

export default Home;
