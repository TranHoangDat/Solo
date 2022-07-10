import React from "react";
import { IoBriefcaseOutline } from "react-icons/io5";

const ScheduleButton = props => {
  return (
    <div
      className={
        props.full
          ? "app__btn_wrapper task__btn schedule__btn"
          : "app__btn_wrapper schedule__btn"
      }
    >
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <IoBriefcaseOutline className="icon" />
        </div>
        <div className="btn__name">Schedule</div>
      </div>
    </div>
  );
};

export default ScheduleButton;
