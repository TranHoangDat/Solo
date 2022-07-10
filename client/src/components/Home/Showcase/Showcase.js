import React from "react";
import figure2_1 from "@assets_images/Home/figures-2.1.png";
import figure2_2 from "@assets_images/Home/figures-2.2.png";
import figure2_3 from "@assets_images/Home/figures-2.3.png";
import figure2_4 from "@assets_images/Home/figures-2.4.png";
import figure2_5 from "@assets_images/Home/figures-2.5.png";
import "./Showcase.css";

const Showcase = () => {
  return (
    <section id="home__showcase">
      <div className="container border__container">
        <div className="showcase__demo">
          <div className="showcase_demo__bg"></div>
          <div className="showcase_demo__gallery">
            <div className="showcase_demo__figure">
              <img src={figure2_1} alt="figures_2_1"></img>
            </div>
            <div
              className="showcase_demo__figure aos-init"
              data-aos="animation-translate-up"
              data-aos-duration="1000"
            >
              <img src={figure2_2} alt="figures_2_2"></img>
            </div>
            <div
              className="showcase_demo__figure aos-init"
              data-aos="animation-translate-down"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <img src={figure2_3} alt="figures_2_3"></img>
            </div>
            <div
              className="showcase_demo__figure aos-init"
              data-aos="animation-translate-down"
              data-aos-delay="400"
              data-aos-duration="1000"
            >
              <img src={figure2_4} alt="figures_2_4"></img>
            </div>
            <div className="showcase_demo__figure">
              <img src={figure2_5} alt="figures_2_5"></img>
            </div>
          </div>
          <div className="showcase_demo__wrapper">
            <h1
              className="section_main__description aos-init"
              data-aos="animation-scale-top"
              data-aos-duration="600"
            >
              Keeping it all together
            </h1>
            <p className="section_sub__description">
              Just invite your team, <br />
              Solo does all the heavy-lifting
            </p>
            <button className="btn showcase_demo__btn transparent__btn">
              Schedule a demo
            </button>
          </div>
        </div>
        <div className="showcase__achievement">
          <ul className="achievement__list">
            <li className="achievement__item">
              <div className="achievement__quantity">
                100<span className="unit">+</span>
              </div>
              <div className="achievement__description">
                Countries supported
              </div>
            </li>
            <li className="achievement__item">
              <div className="achievement__quantity">
                28<span className="unit">m</span>
              </div>
              <div className="achievement__description">
                Downloads on App Store
              </div>
            </li>
            <li className="achievement__item">
              <div className="achievement__quantity">
                16<span className="unit">m</span>
              </div>
              <div className="achievement__description">Verified Users</div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
