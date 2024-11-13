import React from "react";
import parmaPizza from "../assets/img/pizza parma.png";
import marghePizza from "../assets/img/marghe pizza.png";
import pasta from "../assets/img/pasta.jpg";
import tiramisu from "../assets/img/tiramisu.jpg";
import minestrone from "../assets/img/minestrone.jpeg";
import pizzaFull from "../assets/img/pizza full.png";
import "../Style/menu.css";

const Menu = () => {
  const dishes = [
    {
      name: "Parma ham and arugula",
      image: parmaPizza,
      description:
        "Nulla consequat massa quis enim. Donec pede justo fringilla vel.",
    },
    {
      name: "Mozzarella and fresh basil",
      image: marghePizza,
      description:
        "Nulla consequat massa quis enim. Donec pede justo fringilla vel.",
    },
    {
      name: "Tomatoes and pesto sauce",
      image: pizzaFull,
      description:
        "Nulla consequat massa quis enim. Donec pede justo fringilla vel.",
    },
    {
      name: "pasta and lasagna",
      image: pasta,
      description:
        "Nulla consequat massa quis enim. Donec pede justo fringilla vel.",
    },
    {
      name: "Tiramisu and other desserts",
      image: tiramisu,
      description:
        "Nulla consequat massa quis enim. Donec pede justo fringilla vel.",
    },
    {
      name: "Tomato minestrone",
      image: minestrone,
      description:
        "Nulla consequat massa quis enim. Donec pede justo fringilla vel.",
    },
  ];
  return (
    <div className="menu-container">
      {dishes.map((dish) => (
        <div className="dish-container" key={dish.name}>
          <h3>{dish.name}</h3>
          <img src={dish.image} alt={dish.name} />
          <p>{dish.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
