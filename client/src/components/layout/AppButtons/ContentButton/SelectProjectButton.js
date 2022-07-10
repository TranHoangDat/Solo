import React from "react";
import { BsListUl } from "react-icons/bs";

const SelectProjectButton = () => {
  return (
    <div className="app__btn_wrapper content__btn select_project__btn">
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <BsListUl className="icon" />
        </div>
      </div>
    </div>
  );
};

export default SelectProjectButton;
