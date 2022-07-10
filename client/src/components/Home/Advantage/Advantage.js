import React from "react";
import { FaPlay } from "react-icons/fa";
import advantage_figures from "@assets_images/Home/figures.png";
import advantage_1 from "@assets_images/Home/advantages-pic-1.png";
import advantage_1_icon from "@assets_images/Home/cursor.png";
import advantage_2 from "@assets_images/Home/advantages-pic-2.png";
import advantage_2_icon from "@assets_images/Home/chat.png";
import advantage_3 from "@assets_images/Home/advantages-pic-3.png";
import advantage_3_icon from "@assets_images/Home/plane.png";
import ball from "@assets_images/Home/ball.png";
import cube from "@assets_images/Home/cube.png";
import triangle from "@assets_images/Home/triangle.png";
import "./Advantage.css";

const Advantage = () => {
  return (
    <section id="home__advantages">
      <div className="container">
        <div className="advantage__gallery">
          <img src={advantage_figures} alt=""></img>
        </div>
        <div className="section__wrapper">
          <p className="section__title">Amazing features</p>
          <h1
            className="section_main__description aos-init"
            data-aos="animation-scale-top"
            data-aos-duration="600"
          >
            See what you can do <br />
            in one app
          </h1>
        </div>
        <ul className="advantage__list">
          <li className="advantage__item">
            <div className="advantage__image">
              <div className="advantage__figure">
                <img src={advantage_1} alt=""></img>
              </div>
              <div
                className="cube advantage_1__cube aos-init"
                data-aos="animation-scale-top"
                data-aos-duration="800"
              >
                <img src={cube} alt=""></img>
              </div>
              <div
                className="ball advantage_1__ball aos-init"
                data-aos="animation-scale-top"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <img src={ball} alt=""></img>
              </div>
            </div>
            <div className="advantage__wrapper">
              <div
                className="advantage__icon aos-init"
                data-aos="animation-scale-top"
                data-aos-duration="800"
              >
                <img
                  src={advantage_1_icon}
                  className="aos-init"
                  alt="advantage_1_icon"
                />
              </div>
              <div
                className="main__description aos-init"
                data-aos="animation-scale-top"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                Stay focused whenever, wherever
              </div>
              <div className="sub__description">
                We're a growing family of 382,081 designers and makers from
                around the world
              </div>
              <button className="btn transparent__btn">
                <FaPlay style={{ marginRight: ".3rem" }} />
                Watch how it work
              </button>
            </div>
          </li>
          <li className="advantage__item">
            <div className="advantage__image">
              <div className="advantage__figure">
                <img src={advantage_2} alt=""></img>
              </div>
              <div
                className="triangle advantage_2__triangle aos-init"
                data-aos="animation-scale-top"
                data-aos-duration="800"
              >
                <img src={triangle} alt=""></img>
              </div>
              <div
                className="cube advantage_2__cube aos-init"
                data-aos="animation-scale-top"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <img src={cube} alt=""></img>
              </div>
            </div>
            <div className="advantage__wrapper">
              <div
                className="advantage__icon aos-init"
                data-aos="animation-scale-top"
                data-aos-duration="800"
              >
                <img src={advantage_2_icon} className="aos-init" alt="" />
              </div>
              <div
                className="main__description aos-init"
                data-aos="animation-scale-top"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                Share files at the right time
              </div>
              <div className="sub__description">
                We're a growing family of 382,081 designers and makers from
                around the world
              </div>

              <button className="btn transparent__btn">Get Solo Desktop</button>
            </div>
          </li>
          <li className="advantage__item">
            <div className="advantage__image">
              <div className="advantage__figure">
                <img src={advantage_3} alt=""></img>
              </div>
              <div
                className="cube advantage_3__cube aos-init"
                data-aos="animation-scale-top"
                data-aos-duration="800"
              >
                <img src={cube} alt=""></img>
              </div>
              <div
                className="ball advantage_3__ball aos-init"
                data-aos="animation-scale-top"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                <img src={ball} alt=""></img>
              </div>
            </div>
            <div className="advantage__wrapper">
              <div
                className="advantage__icon aos-init"
                data-aos="animation-scale-top"
                data-aos-duration="800"
              >
                <img src={advantage_3_icon} className="aos-init" alt="" />
              </div>
              <div
                className="main__description aos-init"
                data-aos="animation-scale-top"
                data-aos-duration="800"
                data-aos-delay="400"
              >
                Collaborate from anywhere
              </div>
              <div className="sub__description">
                We're a growing family of 382,081 designers and makers from
                around the world
              </div>

              <button className="btn transparent__btn">Schedule a demo</button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Advantage;
