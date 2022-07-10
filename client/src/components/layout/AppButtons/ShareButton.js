import React from "react";
import { BsPersonPlus } from "react-icons/bs";

const ShareButton = props => {
  return (
    <div
      className={
        props.full
          ? "app__btn_wrapper content__btn share__btn"
          : "app__btn_wrapper share__btn"
      }
    >
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <BsPersonPlus className="icon" />
        </div>
        <div className="btn__name">Share</div>
      </div>
    </div>
  );
};

export default ShareButton;
