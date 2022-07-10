import React from "react";
import "./ModalBg.css";

const ModalBg = props => {
  return (
    <div
      className={
        props.showSignUpModal || props.showLogInModal
          ? "modal__bg modal__zoom_in modal__ready"
          : "modal__bg modal__zoom_in"
      }
    ></div>
  );
};

export default ModalBg;
