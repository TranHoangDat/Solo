import React from "react";
import figures_6_1 from "@assets_images/Home/figures-6.1.png";
import figures_6_2 from "@assets_images/Home/figures-6.2.png";
import "./Productivity.css";

const Productivity = () => {
  return (
    <section id="home__productivity">
      <div className="container border__container">
        <div className="productivity__container">
          <div className="productivity__wrapper">
            <div className="section__wrapper">
              <p className="section__title">Deep focus & multitasking</p>
              <h1
                className="section_main__description aos-init"
                data-aos="animation-scale-top"
                data-aos-duration="600"
              >
                Increase Productivity
              </h1>
              <p className="section_sub__description">
                We're a growing family of 382,081 designers and makers from
                around the world
              </p>
              <button className="btn transparent__btn">Sign up now</button>
            </div>
            <div className="productivity__image">
              <div className="productivity__figure">
                <img src={figures_6_1} alt="figures_6_1" />
              </div>
              <div
                className="productivity__figure aos-init"
                data-aos-duration="600"
                data-aos
              >
                <img src={figures_6_2} alt="figures_6_2" />
              </div>
            </div>
          </div>
          <ul className="productivity__list">
            <li className="productivity__item">
              <div className="productivity__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="39"
                  height="37"
                  viewBox="0 0 39 37"
                >
                  <path
                    fill="#272e35"
                    d="M8.097.054l.068.002.03.002.025.002.106.013.045.008.092.02.034.01.1.031.028.011.097.04.034.017.078.041c.339.193.574.498.685.842l.005.02 2.063 6.698a1.5 1.5 0 0 1-2.818 1.019l-.049-.136-.953-3.093C6.154 9.433 5.289 13.62 5.289 17.844a31.01 31.01 0 0 0 4.572 16.26 1.5 1.5 0 1 1-2.558 1.567 34.01 34.01 0 0 1-5.014-17.828c0-4.773 1.007-9.499 2.882-13.803L1.949 5.053a1.5 1.5 0 0 1-1.83-.846l-.05-.136a1.5 1.5 0 0 1 .846-1.83l.136-.05L7.708.104A1.51 1.51 0 0 1 7.767.09l-.126.033c.07-.022.14-.038.21-.05l.052-.007c.026-.004.051-.006.077-.008l.066-.003a1.1 1.1 0 0 1 .051-.001zm26.895 10.846l.183.155 3.155 2.806a1.5 1.5 0 0 1-1.874 2.338l-.12-.096-3.155-2.806c-.71-.631-1.775-.611-2.46.021l-.117.118-6.342 6.999a1.5 1.5 0 0 1-1.756.347l-.125-.067-7.868-4.704a1 1 0 0 0-1.123 1.651l.097.066 15.021 8.98a1.5 1.5 0 0 1-1.412 2.643l-.128-.068-3.005-1.797-.941 1.575c-.038.063-.029.141.017.194l.041.034 5.722 3.421c.345.206.739.299 1.391.29l.32-.011.361-.025.406-.039.704-.084.99-.129c2.218-.27 3.687-.158 5.119.699a1.5 1.5 0 0 1-1.412 2.643l-.128-.068c-.662-.396-1.497-.481-2.924-.329l-.831.103-.478.064-.609.074c-2.035.231-3.093.148-4.279-.513l-.17-.098-5.722-3.421c-1.448-.865-1.954-2.704-1.184-4.18l.091-.162.94-1.574-9.441-5.644a4 4 0 0 1-1.485-5.301l.104-.185a4 4 0 0 1 5.301-1.485l.185.104 6.812 4.072 5.516-6.087c1.727-1.906 4.63-2.117 6.611-.521z"
                  ></path>
                </svg>
              </div>
              <div className="productivity__description">
                <div
                  className="item_main__description aos-init"
                  data-aos="animation-scale-top"
                  data-aos-duration="600"
                >
                  Use a simple way
                </div>
                <div className="item_sub__description">
                  We're a growing family of 382,081 designers and makers from
                  around the world
                </div>
              </div>
            </li>
            <li className="productivity__item">
              <div className="productivity__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="34"
                  viewBox="0 0 40 34"
                >
                  <path
                    fill="#272e35"
                    d="M34.999.5c1.282 0 2.511.509 3.418 1.416s1.416 2.136 1.416 3.418h0v23.333c0 1.282-.509 2.511-1.416 3.418S36.281 33.5 34.999 33.5h0-30c-1.282 0-2.511-.509-3.418-1.416S.166 29.949.166 28.667h0V5.333c0-1.282.509-2.511 1.416-3.418S3.717.5 4.999.5h0zm0 3h-30c-.486 0-.953.193-1.296.537s-.537.81-.537 1.296h0v23.333c0 .486.193.953.537 1.296s.81.537 1.296.537h30c.486 0 .953-.193 1.296-.537s.537-.81.537-1.296h0V5.333c0-.486-.193-.953-.537-1.296s-.81-.537-1.297-.537h0zm-20.667 6.834a1.5 1.5 0 0 1 2.286-1.277h0l10.833 6.667a1.5 1.5 0 0 1 0 2.555h0l-10.833 6.667a1.5 1.5 0 0 1-2.286-1.277h0zm3 2.683v7.965L23.803 17l-6.471-3.983z"
                  ></path>
                </svg>
              </div>
              <div className="productivity__description">
                <div
                  className="item_main__description aos-init"
                  data-aos="animation-scale-top"
                  data-aos-duration="600"
                >
                  A productivity platform
                </div>
                <div className="item_sub__description">
                  We're a growing family of 382,081 designers and makers from
                  around the world
                </div>
              </div>
            </li>
            <li className="productivity__item">
              <div className="productivity__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                >
                  <path
                    fill="#272e35"
                    d="M19.999.167C30.953.167 39.833 9.046 39.833 20s-8.88 19.833-19.833 19.833H20l-.346-.003C8.86 39.646.166 30.838.166 20 .166 9.046 9.046.167 19.999.167zM21.5 3.232v5.101a1.5 1.5 0 0 1-2.993.144l-.007-.144-.001-5.101A16.84 16.84 0 0 0 3.232 18.5h5.101a1.5 1.5 0 0 1 .144 2.993l-.144.007H3.232a16.84 16.84 0 0 0 15.267 15.267l.001-5.101a1.5 1.5 0 0 1 2.993-.144l.007.144v5.101A16.84 16.84 0 0 0 36.767 21.5h-5.101a1.5 1.5 0 0 1-.144-2.993l.144-.007h5.101A16.84 16.84 0 0 0 21.5 3.232zm-7.006 5.819l.086.116 6.221 9.332h5.864a1.5 1.5 0 0 1 1.493 1.356l.007.144a1.5 1.5 0 0 1-1.356 1.493l-.144.007h-6.667a1.5 1.5 0 0 1-1.159-.548l-.089-.12-6.667-10a1.5 1.5 0 0 1 2.41-1.78z"
                  ></path>
                </svg>
              </div>
              <div className="productivity__description">
                <div
                  className="item_main__description aos-init"
                  data-aos="animation-scale-top"
                  data-aos-duration="600"
                >
                  Save your time
                </div>
                <div className="item_sub__description">
                  We're a growing family of 382,081 designers and makers from
                  around the world
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Productivity;
