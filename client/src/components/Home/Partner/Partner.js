import React from "react";
import waves from "@assets_images/Home/waves.svg";
import RotaShow from "@assets_images/Home/rotashow.svg";
import travelers from "@assets_images/Home/travelers.svg";
import goldlines from "@assets_images/Home/goldlines.svg";
import velocity from "@assets_images/Home/velocity.svg";
import "./Partner.css";

const Partner = () => {
  return (
    <section id="home__partners">
      <div className="container">
        <div className="home__partners">
          <p>Thousands of teams worldwide are using Solo</p>
          <div className="partner__wrapper">
            <div className="partner__logo">
              <img src={waves} alt="waves"></img>
            </div>
            <div className="partner__logo">
              <img src={RotaShow} alt="RotaShow"></img>
            </div>
            <div className="partner__logo">
              <img src={travelers} alt="travelers"></img>
            </div>
            <div className="partner__logo">
              <img src={goldlines} alt="goldlines"></img>
            </div>
            <div className="partner__logo">
              <img src={velocity} alt="velocity"></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partner;
