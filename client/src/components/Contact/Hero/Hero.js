import React from "react";
import figures_2_1 from "@assets_images/Home/figures-2.1.png";
import figures_2_2 from "@assets_images/Home/figures-2.2.png";
import figures_2_3 from "@assets_images/Home/figures-2.3.png";
import figures_2_4 from "@assets_images/Home/figures-2.4.png";
import figures_2_5 from "@assets_images/Home/figures-2.5.png";

import "./Hero.css";

const Hero = () => {
  return (
    <section id="contact__hero">
      <div className="container contact_hero__container">
        <div className="contact_hero__image">
          <div className="contact_hero__figure">
            <img src={figures_2_1} alt="figures_2_1" />
          </div>
          <div
            className="contact_hero__figure aos-init"
            data-aos="animation-translate-up"
            data-aos-duration="600"
          >
            <img src={figures_2_2} alt="figures_2_2" />
          </div>
          <div
            className="contact_hero__figure aos-init"
            data-aos="animation-translate-down"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <img src={figures_2_3} alt="figures_2_3" />
          </div>
          <div
            className="contact_hero__figure aos-init"
            data-aos="animation-translate-down"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            <img src={figures_2_4} alt="figures_2_4" />
          </div>
          <div className="contact_hero__figure">
            <img src={figures_2_5} alt="figures_2_5" />
          </div>
        </div>
        <div className="section__wrapper">
          <h1
            className="section_main__description aos-init"
            data-aos="animation-scale-top"
            data-aos-duration="600"
          >
            Contact Us
          </h1>
          <p className="section_sub__description">
            Questions, bug reports, feedback.
          </p>
          <form className="contact_hero__form">
            <label className="home__label" for="contact__email">
              Your email
            </label>
            <input
              className="home__input light__mode"
              type="text"
              id="contact__email"
              name="contact__email"
              placeholder="Enter your email"
            ></input>
            <label className="home__label" for="contact__content">
              Tell us what you need help with:
            </label>
            <textarea
              className="home__input light__mode"
              id="contact__content"
              name="contact__content"
              placeholder="Enter a topic, like “channel problem...”"
            ></textarea>
            <input
              className="home__input"
              type="submit"
              value="Send now"
            ></input>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Hero;
