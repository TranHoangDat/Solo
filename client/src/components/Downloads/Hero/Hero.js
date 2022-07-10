import React from "react";
import { Link } from "react-router-dom";
import figures_7_1 from "@assets_images/Home/figures-7.1@2x.png";
import figures_7_2 from "@assets_images/Home/figures-7.2@2x.png";
import figures_7_3 from "@assets_images/Home/figures-7.3@2x.png";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="downloads__hero">
      <div className="container">
        <div className="section__wrapper downloads_hero__wrapper">
          <p className="section__title">Ready to use Solo?</p>
          <h1
            className="section_main__description aos-init"
            data-aos="animation-scale-top"
            data-aos-duration="600"
          >
            Download Solo
          </h1>
          <p className="section_sub__description">
            By downloading Solo, you accept{" "}
            <Link to="#" className="orange__link">
              Terms Of Use
            </Link>{" "}
            and{" "}
            <Link to="#" className="orange__link">
              Privacy & Cookies
            </Link>
            .
          </p>
          <button className="btn orange__btn">Get Solo for Mac Os</button>
        </div>
        <div className="downloads_hero__image">
          <div className="downloads_hero__figure">
            <img src={figures_7_1} alt="figures_7_1" />
          </div>
          <div className="downloads_hero__figure">
            <img src={figures_7_2} alt="figures_7_2" />
          </div>
          <div className="downloads_hero__figure">
            <img src={figures_7_3} alt="figures_7_3" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
