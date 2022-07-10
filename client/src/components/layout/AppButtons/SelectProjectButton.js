import React from "react";
import { BsListUl } from "react-icons/bs";

const SelectProjectButton = (props) => {
  return (
    <div
      className={
        props.full
          ? "app__btn_wrapper task__btn select_project__btn"
          : "app__btn_wrapper select_project__btn"
      }
    >
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <BsListUl className="icon" />
        </div>
        <div className="project__color btn__name charcoal">
          <span className="btn__name_item project__name">Welcome</span>
          <span className="delimiter"> / </span>
          <span className="btn__name_item section__name">
            To go further To go further
          </span>
        </div>
      </div>
    </div>
  );
};

export default SelectProjectButton;
