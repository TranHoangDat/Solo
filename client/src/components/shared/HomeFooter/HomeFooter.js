import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import logo from "../../../assets/img/Home/logo-dark.png";
import app_store_logo from "../../../assets/img/Home/app-store.svg";
import google_play_logo from "../../../assets/img/Home/google-play.svg";
import "./HomeFooter.css";

const HomeFooter = () => {
  return (
    <section id="home__footer">
      <div className="container footer__container">
        <div className="section__wrapper">
          <div className="footer__description">
            <div className="footer__logo">
              <Link to="/">
                <img src={logo}></img>
              </Link>
            </div>
            <p className="section_sub__description">
              Join millions of people who organize work and life with Solo App
            </p>
          </div>
          <div class="footer__wrapper">
            <div className="mobile__platforms">
              <div className="mobile__logo">
                <img src={app_store_logo} />
              </div>

              <div className="mobile__logo">
                <img src={google_play_logo} />
              </div>
            </div>
            <nav className="footer__nav">
              <NavLink
                to="/downloads"
                className="footer__link"
                activeClassName="active"
              >
                Downloads
              </NavLink>

              <NavLink
                to="/pricing"
                className="footer__link"
                activeClassName="active"
              >
                Pricing
              </NavLink>

              <NavLink
                to="/features"
                className="footer__link"
                activeClassName="active"
              >
                Features
              </NavLink>

              <NavLink
                to="/about"
                className="footer__link"
                activeClassName="active"
              >
                About Us
              </NavLink>

              <NavLink
                to="/contact"
                className="footer__link"
                activeClassName="active"
              >
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
        <div className="design__author">
          <div className="author__description">
            © Solo Inc. Designed by UI8 Team
          </div>
          <div className="social__media">
            <div className="social_media__link">
              <Link to="/">
                <FaFacebook />
              </Link>
            </div>
            <div className="social_media__link">
              <Link to="/">
                <FaTwitter />
              </Link>
            </div>
            <div className="social_media__link">
              <Link to="/">
                <GrInstagram />
              </Link>
            </div>
          </div>
        </div>
        <label className="switch home_switch__theme">
          <input className="switch__input" type="checkbox"></input>
          <span className="switch__in">
            <span className="switch__box"></span>
            <span className="switch__icon switch_icon__dark">
              <svg class="icon icon-dark">
                <svg id="icon-dark" viewBox="0 0 24 24">
                  <path d="M8 2.3c.4-.1.7 0 1 .3s.4.7.3 1C9.1 4.4 9 5.2 9 6a8.96 8.96 0 0 0 9 9c.8 0 1.6-.1 2.4-.3a.96.96 0 0 1 .9.2c.3.3.4.7.3 1C20.3 20.7 15.9 24 11 24A10.97 10.97 0 0 1 0 13C0 8.1 3.3 3.7 8 2.3zM21 6a.94.94 0 0 1 1 1v1h1a.94.94 0 0 1 1 1 .94.94 0 0 1-1 1h-1v1a.94.94 0 0 1-1 1 .94.94 0 0 1-1-1v-1h-1a.94.94 0 0 1-1-1 .94.94 0 0 1 1-1h1V7a.94.94 0 0 1 1-1zm-6-6a.94.94 0 0 1 1 1v1h1a.94.94 0 0 1 1 1 .94.94 0 0 1-1 1h-1v1a.94.94 0 0 1-1 1 .94.94 0 0 1-1-1V4h-1a.94.94 0 0 1-1-1 .94.94 0 0 1 1-1h1V1a.94.94 0 0 1 1-1z"></path>
                </svg>
              </svg>
            </span>
            <span className="switch__icon switch_icon__light">
              <svg class="icon icon-light">
                <svg id="icon-light" viewBox="0 0 24 23">
                  <path d="M12 5a7 7 0 0 1 7 7 6.993 6.993 0 0 1-3.932 6.286l-.068.031V22a1 1 0 0 1-.883.993L14 23h-4a1 1 0 0 1-1-1v-3.682l-.068-.032a6.994 6.994 0 0 1-3.927-6.016L5 12a7 7 0 0 1 7-7zm0 2a5 5 0 0 0-5 5 4.994 4.994 0 0 0 3.334 4.708 1 1 0 0 1 .666.943V21h2v-3.349a1 1 0 0 1 .551-.893l.116-.049A4.997 4.997 0 0 0 17 12a5 5 0 0 0-5-5zm-9 4a1 1 0 0 1 .117 1.993L3 13H1a1 1 0 0 1-.117-1.993L1 11h2zm20 0a1 1 0 0 1 .117 1.993L23 13h-2a1 1 0 0 1-.117-1.993L21 11h2zM4.836 3.431l.094.083 1.414 1.414a1 1 0 0 1-1.32 1.497l-.094-.083-1.414-1.414a1 1 0 0 1 1.32-1.497zm15.649.083a1 1 0 0 1 .083 1.32l-.083.094-1.414 1.414a1 1 0 0 1-1.497-1.32l.083-.094 1.414-1.414a1 1 0 0 1 1.414 0zM12 0a1 1 0 0 1 .993.883L13 1v2a1 1 0 0 1-1.993.117L11 3V1a1 1 0 0 1 1-1z"></path>
                </svg>
              </svg>
            </span>
          </span>
        </label>
      </div>
    </section>
  );
};

export default HomeFooter;
