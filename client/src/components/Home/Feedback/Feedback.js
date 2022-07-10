import React from "react";
import Slider from "react-slick";
import star from "@assets_images/Home/star-fill.svg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Feedback.css";

const Feedback = () => {
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section id="home__feedback">
      <div className="container">
        <div className="section__wrapper feedback__wrapper">
          <h1
            className="section_main__description aos-init"
            data-aos="animation-scale-top"
            data-aos-duration="600"
          >
            What people are saying
          </h1>
        </div>
        <Slider {...settings} className="feedback__slider">
          <div className="feedback__slide">
            <div className="feedback__comment">
              <q>
                I used to have a hard time figuring out how to organize online
                meetings, Solo helped me to find a great solution!
              </q>
            </div>
            <div className="feedback__rating">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <div className="feedback__commentator">Fae Schumm</div>
            <div className="feedback__platform">via. Apple Store</div>
          </div>
          <div className="feedback__slide">
            <div className="feedback__comment">
              <q>
                I used to have a hard time figuring out how to organize online
                meetings, Solo helped me to find a great solution!
              </q>
            </div>
            <div className="feedback__rating">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <div className="feedback__commentator">Fae Schumm</div>
            <div className="feedback__platform">via. Apple Store</div>
          </div>
          <div className="feedback__slide">
            <div className="feedback__comment">
              <q>
                I used to have a hard time figuring out how to organize online
                meetings, Solo helped me to find a great solution!
              </q>
            </div>
            <div className="feedback__rating">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <div className="feedback__commentator">Fae Schumm</div>
            <div className="feedback__platform">via. Apple Store</div>
          </div>
          <div className="feedback__slide">
            <div className="feedback__comment">
              <q>
                I used to have a hard time figuring out how to organize online
                meetings, Solo helped me to find a great solution!
              </q>
            </div>
            <div className="feedback__rating">
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
              <img src={star} alt="star" />
            </div>
            <div className="feedback__commentator">Fae Schumm</div>
            <div className="feedback__platform">via. Apple Store</div>
          </div>
        </Slider>
      </div>
    </section>
  );
};

const PrevArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow prev-arrow"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <BsArrowLeft style={{ fontSize: "48px" }} />
    </div>
  );
};

const NextArrow = props => {
  const { className, style, onClick } = props;
  return (
    <div
      className="slick-arrow next-arrow"
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <BsArrowRight style={{ fontSize: "48px" }} />
    </div>
  );
};

export default Feedback;
