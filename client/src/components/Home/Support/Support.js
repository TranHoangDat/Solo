import React from "react";
import figures_4_1 from "@assets_images/Home/figures-4.1.png";
import figures_4_2 from "@assets_images/Home/figures-4.2.png";
import figures_4_3 from "@assets_images/Home/figures-4.3.png";
import figures_5_1 from "@assets_images/Home/figures-5.1.png";
import figures_5_2 from "@assets_images/Home/figures-5.2.png";
import "./Support.css";

const Support = () => {
  return (
    <section id="home__support">
      <div className="container support__container">
        <div className="multi_platforms__container">
          <div className="section__wrapper multi_platforms__wrapper">
            <p className="section__title">Amazing features</p>
            <h1
              className="section_main__description aos-init"
              data-aos="animation-scale-top"
              data-aos-duration="600"
            >
              Your busy life deserves this
            </h1>
            <p className="section_sub__description">
              We're a growing family of 382,081 designers and makers from around
              the world
            </p>

            <button className="btn transparent__btn">
              Launch Solo Desktop App
            </button>
          </div>
          <div className="multi_platforms__image">
            <div className="multi_platforms__figure">
              <img src={figures_4_1} alt="figures_4_1" />
            </div>
            <div
              className="multi_platforms__figure aos-init"
              data-aos="animation-translate-down"
              data-aos-duration="600"
            >
              <img src={figures_4_2} alt="figures_4_2" />
            </div>
            <div
              className="multi_platforms__figure aos-init"
              data-aos="animation-translate-down"
              data-aos-duration="600"
            >
              <img src={figures_4_3} alt="figures_4_3" />
            </div>
          </div>
        </div>
        <div className="memorization__container">
          <div className="section__wrapper memorization__wrapper">
            <p className="section__title">Amazing features</p>
            <h1
              className="section_main__description aos-init"
              data-aos="animation-scale-top"
              data-aos-duration="600"
            >
              Never forget anything, <br />
              ever again
            </h1>
            <p className="section_sub__description">
              We're a growing family of 382,081 designers and makers from around
              the world
            </p>

            <button className="btn transparent__btn">Find out more</button>
          </div>
          <div className="memorization__image">
            <div className="memorization__figure">
              <img src={figures_5_1} alt="figures_5_1" />
            </div>
            <div
              className="memorization__figure aos-init"
              data-aos="animation-translate-up"
              data-aos-duration="600"
            >
              <img src={figures_5_2} alt="figures_5_2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Support;
