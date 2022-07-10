import React, { useState } from "react";
import HomeHeader from "../shared/HomeHeader/HomeHeader.js";
import Hero from "./Hero/Hero.js";
import Platform from "./Platform/Platform.js";
import Feedback from "../Home/Feedback/Feedback.js";
import HomeFooter from "../shared/HomeFooter/HomeFooter.js";
import ModalBg from "../shared/EntryModal/ModalBg/ModalBg.js";
import EntryModal from "../shared/EntryModal/EntryModal.js";

const Downloads = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLogInModal, setShowLogInModal] = useState(false);

  return (
    <>
      <HomeHeader
        setShowSignUpModal={setShowSignUpModal}
        setShowLogInModal={setShowLogInModal}
      />
      <Hero />
      <Platform />
      <Feedback />
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

export default Downloads;
