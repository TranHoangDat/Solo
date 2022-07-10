import React from "react";
import atom from "@assets_images/Home/atom.svg";
import dribble from "@assets_images/Home/dribbble.svg";
import figma from "@assets_images/Home/figma.svg";
import google from "@assets_images/Home/google.svg";
import notion from "@assets_images/Home/notion.svg";
import sketch from "@assets_images/Home/sketch.svg";
import ui8 from "@assets_images/Home/ui8.svg";
import "./Integration.css";

const Integration = () => {
  return (
    <section id="home__integrations">
      <div className="container integration__container">
        <div className="section__wrapper">
          <p className="section__title">Amazing features</p>
          <h1
            className="section_main__description aos-init"
            data-aos="animation-scale-top"
            data-aos-duration="600"
          >
            Powerful integrations
          </h1>
          <p className="section_sub__description">
            We're a growing family of 382,081 designers and makers from around
            the world
          </p>
        </div>
        <ul className="integration__list">
          <li
            className="integration__item aos-init"
            data-aos="animation-translate-down"
            data-aos-duration="600"
            data-aos-delay="200"
            id="notion__item"
          >
            <div className="integration__icon">
              <img src={notion} alt="notion"></img>
            </div>
          </li>
          <li
            className="integration__item aos-init"
            data-aos="animation-translate-down"
            data-aos-duration="600"
            data-aos-delay="200"
            id="atom__item"
          >
            <div className="integration__icon">
              <img src={atom} alt="atom"></img>
            </div>
          </li>
          <li
            className="integration__item aos-init"
            data-aos="animation-translate-down"
            data-aos-duration="600"
            data-aos-delay="200"
            id="dribble__item"
          >
            <div className="integration__icon">
              <img src={dribble} alt="dribble"></img>
            </div>
          </li>
          <li
            className="integration__item aos-init"
            data-aos="animation-translate-up"
            data-aos-duration="600"
            data-aos-delay="200"
            id="figma__item"
          >
            <div className="integration__icon">
              <img src={figma} alt="figma"></img>
            </div>
          </li>
          <li
            className="integration__item aos-init"
            data-aos="animation-translate-up"
            data-aos-duration="600"
            data-aos-delay="200"
            id="sketch__item"
          >
            <div className="integration__icon">
              <img src={sketch} alt="sketch"></img>
            </div>
          </li>
          <li
            className="integration__item aos-init"
            data-aos="animation-translate-up"
            data-aos-duration="600"
            data-aos-delay="200"
            id="ui8__item"
          >
            <div className="integration__icon">
              <img src={ui8} alt="ui8"></img>
            </div>
          </li>
          <li
            className="integration__item aos-init"
            data-aos="animation-translate-up"
            data-aos-duration="600"
            data-aos-delay="200"
            id="google__item"
          >
            <div className="integration__icon">
              <img src={google} alt="google"></img>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Integration;
