import React from "react";
import Header from "../Components/Header";
import insta from "../assets/img/insta.png";
import twitter from "../assets/img/x.png";
import facebook from "../assets/img/facebook.png";
import hearts from "../assets/img/three hearts.png";
import Call from "../Components/Call";
import Newsletter from "../Components/Newsletter";
import "../Style/contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="header-contact">
        <div className="header-contact-container">
          <div className="title-contact">
            <h2>The World's Most Popular Food</h2>
            <p>sample@info.com</p>
          </div>
          <div className="socialDiv">
            <p>
              Development is heart of our business. Our skilled designers and
              developers make sure to deliver tried-tested efficient, scalable.
            </p>
            <ul className="socialUl">
              <li>
                <img src={insta} alt="instagram" />
              </li>
              <li>
                <img src={twitter} alt="x" />
              </li>
              <li>
                <img src={facebook} alt="facebook" />
              </li>
            </ul>
          </div>
          <img
            className="three-hearts-contact"
            src={hearts}
            alt="three hearts"
          />
        </div>
      </div>

      <Call />

      <Newsletter />
    </div>
  );
};

export default Contact;
