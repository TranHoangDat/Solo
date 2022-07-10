import React from "react";
import figures_7_1 from "@assets_images/Home/figures-7.1.png";
import figures_7_2 from "@assets_images/Home/figures-7.2.png";
import "./Invite.css";

const Invite = () => {
  return (
    <section id="home__invite">
      <div className="container border__container">
        <div className="invite__container">
          <div className="invite__bg"></div>
          <div className="section__wrapper">
            <div
              className="section_main__description aos-init"
              data-aos="animation-scale-top"
              data-aos-duration="600"
            >
              Get started with Solo today
            </div>
            <div className="section_sub__description">
              Just invite your team, Solo does all the heavy-lifting.
            </div>
            <button className="btn orange__btn">Try it free</button>
          </div>
          <div className="invite__image">
            <div className="invite__figure">
              <img src={figures_7_1} alt="figures_7_1" />
            </div>
            <div
              className="invite__figure aos-init"
              data-aos="animation-translate-down"
              data-aos-duration="600"
            >
              <img src={figures_7_2} alt="figures_7_2" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invite;
