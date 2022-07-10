import React, { useState } from "react";
import HomeHeader from "../shared/HomeHeader/HomeHeader";
import HomeFooter from "../shared/HomeFooter/HomeFooter";
import ModalBg from "../shared/EntryModal/ModalBg/ModalBg.js";
import EntryModal from "../shared/EntryModal/EntryModal.js";
import Hero from "./Hero/Hero";
import Team from "./Team/Team";

const About = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLogInModal, setShowLogInModal] = useState(false);

  return (
    <>
      <HomeHeader
        setShowSignUpModal={setShowSignUpModal}
        setShowLogInModal={setShowLogInModal}
      />
      <Hero />
      <Team />
      <ModalBg
        showSignUpModal={showSignUpModal}
        showLogInModal={showLogInModal}
      />
      <EntryModal
        id="sign_up__modal"
        entryType="Sign up"
        showModal={showSignUpModal}
        setShowModal={setShowSignUpModal}
      />
      <EntryModal
        id="login__modal"
        entryType="Login"
        showModal={showLogInModal}
        setShowModal={setShowLogInModal}
      />
      <HomeFooter />
    </>
  );
};

export default About;
