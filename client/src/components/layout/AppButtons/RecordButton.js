import React from "react";
import { BsMic } from "react-icons/bs";

const RecordButton = () => {
  return (
    <div className="app__btn_wrapper record__btn">
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <BsMic className="icon" />
        </div>
      </div>
    </div>
  );
};

export default RecordButton;
