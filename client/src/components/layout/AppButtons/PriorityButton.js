import React from "react";
import { IoFlagOutline, IoFlagSharp } from "react-icons/io5";

const PriorityButton = () => {
  return (
    <div className="app__btn_wrapper priority__btn">
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <IoFlagOutline className="icon" />
        </div>
      </div>
    </div>
  );
};

export default PriorityButton;
