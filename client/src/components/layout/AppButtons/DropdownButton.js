import React from "react";
import { IoIosArrowForward, IoIosArrowDown } from "react-icons/io";

const DropdownButton = props => {
  return (
    <div className="app__btn_wrapper dropdown__btn">
      <div
        className="btn__name_wrapper"
        onClick={() => props.setOpen(!props.open)}
      >
        <div className="btn__icon">
          {props.open && <IoIosArrowDown className="icon" />}
          {!props.open && <IoIosArrowForward className="icon" />}
        </div>
      </div>
    </div>
  );
};

export default DropdownButton;
