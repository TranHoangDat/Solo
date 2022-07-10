import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import mbHeaderPic from "@assets_images/Home/header-pic-mobile.png";
import headerPic from "@assets_images/Home/header-pic.png";
import logo from "@assets_images/Home/logo-dark.png";
import "./HomeHeader.css";

const HomeHeader = props => {
  const homeElement = document.getElementById("home");
  const [sidebar, setSidebar] = useState(false);

  return (
    <header id="home__header">
      <div className="header__container container">
        <Link to="/" className="header__logo">
          <img src={logo}></img>
        </Link>
        <button
          className={sidebar ? "header__burger active" : "header__burger"}
          onClick={() => {
            setSidebar(!sidebar);
            document.body.classList.toggle("no__scroll");
          }}
        ></button>
        <div
          className={sidebar ? "header__wrapper visible" : "header__wrapper"}
        >
          <nav className="header__nav">
            <NavLink
              to="/downloads"
              className="header__link"
              activeClassName="active"
              onClick={() => homeElement.classList.remove("no__scroll")}
            >
              Downloads
            </NavLink>

            <NavLink
              to="/pricing"
              className="header__link"
              activeClassName="active"
              onClick={() => homeElement.classList.remove("no__scroll")}
            >
              Pricing
            </NavLink>

            <NavLink
              to="/features"
              className="header__link"
              activeClassName="active"
              onClick={() => homeElement.classList.remove("no__scroll")}
            >
              Features
            </NavLink>

            <NavLink
              to="/about"
              className="header__link"
              activeClassName="active"
              onClick={() => homeElement.classList.remove("no__scroll")}
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              className="header__link"
              activeClassName="active"
              onClick={() => homeElement.classList.remove("no__scroll")}
            >
              Contact
            </NavLink>
          </nav>
          <picture className="header__preview">
            <source media="(min-width: 768px)" srcSet={headerPic}></source>
            <img src={mbHeaderPic}></img>
          </picture>
          <div className="header__btns">
            <button
              className="btn header__btn orange__btn"
              onClick={() => props.setShowSignUpModal(true)}
            >
              Sign up
            </button>
            <button
              className="btn header__btn transparent__btn"
              onClick={() => props.setShowLogInModal(true)}
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HomeHeader;
