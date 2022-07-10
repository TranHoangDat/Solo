import React from "react";
import main_figure from "@assets_images/Home/figures-3.1.png";
import figure_3_2 from "@assets_images/Home/figures-3.2.png";
import figure_3_3 from "@assets_images/Home/figures-3.3.png";
import "./History.css";

const History = () => {
  return (
    <section id="home__history">
      <div className="history__container">
        <div className="history__gallery">
          <div className="history__figure">
            <img src={main_figure} alt="main_figure" />
          </div>
          <div
            className="left__figure aos-init"
            data-aos="animation-translate-down"
            data-aos-duration="1000"
          >
            <img src={figure_3_2} alt="figure_3_2" />
          </div>
          <div
            className="right__figure aos-init"
            data-aos="animation-translate-down"
            data-aos-duration="1000"
          >
            <img src={figure_3_3} alt="figure_3_3" />
          </div>
        </div>

        <div className="history__wrapper">
          <div className="section__title">
            Easily find what you're looking for
          </div>
          <div
            className="section_main__description aos-init"
            data-aos="animation-scale-top"
            data-aos-duration="600"
          >
            History you can see and search
          </div>
          <div className="section_sub__description">
            We're a growing family of 382,081 designers and makers from around
            the world
          </div>
          <button className="btn transparent__btn">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default History;
