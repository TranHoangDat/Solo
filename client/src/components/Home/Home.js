import React, { useState } from "react";
import HomeHeader from "../shared/HomeHeader/HomeHeader.js";
import Hero from "./Hero/Hero.js";
import Partner from "./Partner/Partner.js";
import Showcase from "./Showcase/Showcase.js";
import Setup from "./Setup/Setup.js";
import Advantage from "./Advantage/Advantage.js";
import History from "./History/History.js";
import Service from "./Service/Service.js";
import Integration from "./Integration/Integration.js";
import Support from "./Support/Support.js";
import Productivity from "./Productivity/Productivity.js";
import Feedback from "./Feedback/Feedback.js";
import Invite from "./Invite/Invite.js";
import HomeFooter from "../shared/HomeFooter/HomeFooter.js";
import ModalBg from "../shared/EntryModal/ModalBg/ModalBg.js";
import EntryModal from "../shared/EntryModal/EntryModal.js";

const Home = () => {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  const [showLogInModal, setShowLogInModal] = useState(false);

  return (
    <>
      <HomeHeader
        setShowSignUpModal={setShowSignUpModal}
        setShowLogInModal={setShowLogInModal}
      />
      <Hero />
      <Partner />
      <Showcase />
      <Setup />
      <Advantage />
      <History />
      <Service />
      <Integration />
      <Support />
      <Productivity />
      <Feedback />
      <Invite />
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

export default Home;
