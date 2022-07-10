import React from "react";
import "./CtaButton.scss";

const BgRedButton = props => {
  return (
    <div
      className={
        props.available ? "cta__btn add__btn available" : "cta__btn add__btn"
      }
      onClick={() => props.handleOnClick()}
    >
      {props.btnName}
    </div>
  );
};

export default BgRedButton;
