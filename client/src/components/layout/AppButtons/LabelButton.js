import React from "react";
import { FiTag } from "react-icons/fi";

const LabelButton = () => {
  return (
    <div className="app__btn_wrapper label__btn">
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <FiTag className="icon" />
        </div>
      </div>
    </div>
  );
};

export default LabelButton;
