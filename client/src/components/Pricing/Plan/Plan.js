import React, { useState } from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { FaPlay } from "react-icons/fa";
import box from "@assets_images/Home/box.png";
import "./Plan.css";

const Plan = () => {
  const [firFtLst, setFirFtLst] = useState(false);
  const [secFtLst, setSecFtLst] = useState(false);
  const [thirdFtLst, setThirdFtLst] = useState(false);

  return (
    <section id="pricing__plan">
      <div className="container border__container">
        <div className="section__wrapper">
          <h1
            className="section_main__description aos-init"
            data-aos="animation-scale-top"
            data-aos-duration="600"
          >
            Choose the plan
          </h1>
          <p className="section_sub__description">
            Pay by month or the year, and cancel at any time.
          </p>
        </div>
        <ul className="plan__list">
          <li className="plan__item">
            <div className="plan__header">
              <h2 className="plan__title">Basic</h2>
              <div className="plan__price">
                <span className="unit">$</span>
                <span>9</span> /month
              </div>
              <p className="plan__description">
                Beautifully simple project planning
              </p>
              <button className="btn orange__btn">Start free trial</button>
            </div>
            <div className="plan__body">
              <p className="feature__title">Basic</p>
            </div>
            <div className="plan__footer">
              <div
                className={
                  firFtLst ? "feature__dropdown active" : "feature__dropdown"
                }
                onClick={() => setFirFtLst(!firFtLst)}
              >
                See features <RiArrowDownSLine className="dropdown__icon" />
              </div>
              <ul className="feature__list">
                <li className="feature__item">10 Boards per Team</li>
                <li className="feature__item">Unlimited Cards</li>
                <li className="feature__item">Unlimited Lists</li>
                <li className="feature__item">10MB per File Attachment</li>
              </ul>
            </div>
          </li>
          <li className="plan__item plan__popular">
            <div className="plan__header">
              <h2 className="plan__title">Premium</h2>
              <div className="plan__price">
                <span className="unit">$</span>
                <span>19</span> /month
              </div>
              <p className="plan__description">
                Declutter your mind and save time with Premium.
              </p>
              <button className="btn orange__btn">Start free trial</button>
            </div>
            <div className="plan__body">
              <p className="feature__title">Premium</p>
            </div>
            <div className="plan__footer">
              <div
                className={
                  secFtLst ? "feature__dropdown active" : "feature__dropdown"
                }
                onClick={() => setSecFtLst(!secFtLst)}
              >
                See features <RiArrowDownSLine className="dropdown__icon" />
              </div>
              <ul className="feature__list">
                <li className="feature__item">Unlimited Boards per Team</li>
                <li className="feature__item">Unlimited Cards</li>
                <li className="feature__item">Unlimited Lists</li>
                <li className="feature__item">250MB per File Attachment</li>
                <li className="feature__item">Advanced Checklists</li>
                <li className="feature__item">Priority Support</li>
              </ul>
            </div>
          </li>
          <li className="plan__item">
            <div className="plan__header">
              <h2 className="plan__title">Business</h2>
              <div className="plan__price">
                <img src={box} alt="box" />
              </div>
              <p className="plan__description">
                For large business and team. Contact sale!
              </p>
              <button className="btn transparent__btn">
                <FaPlay style={{ marginRight: "0.5rem" }} />
                Contact Sale
              </button>
            </div>
            <div className="plan__body">
              <p className="feature__title">Business</p>
            </div>
            <div className="plan__footer">
              <div
                className={
                  thirdFtLst ? "feature__dropdown active" : "feature__dropdown"
                }
                onClick={() => setThirdFtLst(!thirdFtLst)}
              >
                See features <RiArrowDownSLine className="dropdown__icon" />
              </div>
              <ul className="feature__list">
                <li className="feature__item">Unlimited Boards per Team</li>
                <li className="feature__item">Unlimited Cards</li>
                <li className="feature__item">Unlimited Lists</li>
                <li className="feature__item">1GB per File Attachment</li>
                <li className="feature__item">100+ App Integrations</li>
                <li className="feature__item">Unlimited Command runs</li>
                <li className="feature__item">Priority Support</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Plan;
