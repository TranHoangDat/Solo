import React from "react";
import figures_8 from "@assets_images/Home/figures-8.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="about__hero">
      <div className="container">
        <div className="section__wrapper about_hero__wrapper">
          <h1
            className="section_main__description aos-init"
            data-aos="animation-scale-top"
            data-aos-duration="600"
          >
            Organize your work in seconds
          </h1>
        </div>
        <div className="about_hero__image">
          <img src={figures_8} alt="figures_8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
