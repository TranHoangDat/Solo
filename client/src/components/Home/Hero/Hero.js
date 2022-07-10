import React from "react";
import { FaPlay } from "react-icons/fa";
import figures1_1 from "@assets_images/Home/figures-1.1.png";
import figures1_2 from "@assets_images/Home/figures-1.2.png";
import figures1_3 from "@assets_images/Home/figures-1.3.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="home__hero">
      <div className="container home_hero__container">
        <div className="section__wrapper home_hero__wrapper">
          <p className="section__title">Risk-free 30 day trial</p>
          <h1 className="section_main__description">
            <span
              data-aos="animation-scale-top"
              data-aos-duration="600"
              className="aos-init"
            >
              The best way
            </span>
            <span
              data-aos="animation-scale-top"
              data-aos-duration="600"
              className="aos-init"
            >
              to organize
            </span>
            <span
              data-aos="animation-scale-top"
              data-aos-duration="600"
              className="aos-init"
            >
              your work.
            </span>
          </h1>
          <p className="section_sub__description">
            Organize your tasks, lists and reminders in one app.
          </p>
          <div className="section__btns">
            <button className="btn section__btn orange__btn">
              Try it free
            </button>
            <button className="btn section__btn transparent__btn">
              <FaPlay style={{ marginRight: ".3rem" }} /> Watch how it works
            </button>
          </div>
        </div>
        <div className="home_hero__image aos-init" data-aos>
          <div className="home_hero__figure">
            <img src={figures1_1} alt="figures1_1"></img>
          </div>
          <div className="home_hero__figure">
            <img src={figures1_2} alt="figures1_2"></img>
          </div>
          <div className="home_hero__figure">
            <img src={figures1_3} alt="figures1_3"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
