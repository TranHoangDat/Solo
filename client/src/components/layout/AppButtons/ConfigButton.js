import React from "react";
import "./AppButtons.scss";

const ConfigButton = () => {
  return (
    <div className="app__btn_wrapper config__btn">
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  );
};

export default ConfigButton;
