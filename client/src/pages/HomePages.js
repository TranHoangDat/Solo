import React, { useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import "@assets_styles/HomeUtilities.css";
import About from "@components/About/About.js";
import Contact from "@components/Contact/Contact.js";
import Downloads from "@components/Downloads/Downloads.js";
import Home from "@components/Home/Home.js";
import Pricing from "@components/Pricing/Pricing.js";
import {AuthContext} from '../contexts/AuthContext';

const HomePages = () => {
  //Context 
  const {authState: {isAuthenticated}} = useContext(AuthContext);

  useEffect(() => {
    AOS.init({
      // Global settings:
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: true, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      once: false, // whether animation should happen only once - while scrolling down
      anchorPlacement: "center-bottom", // defines which position of the element regarding to window should trigger the animation
    });

    AOS.refresh();
  });

  return (
  <>
    {isAuthenticated && <Redirect to='/app'/>}
    {
    !isAuthenticated &&
      <div id="home">
        <Router>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/downloads" component={Downloads} />
            <Route path="/pricing" component={Pricing} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </Router>
      </div>
    }
  </>
  );
};

export default HomePages;
