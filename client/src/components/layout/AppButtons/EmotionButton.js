import React from "react";
import { RiEmotionLine } from "react-icons/ri";

const EmotionButton = () => {
  return (
    <div className="app__btn_wrapper emotion__btn">
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <RiEmotionLine className="icon" />
        </div>
      </div>
    </div>
  );
};

export default EmotionButton;
