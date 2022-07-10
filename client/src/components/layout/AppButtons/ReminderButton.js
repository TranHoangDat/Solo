import React from "react";
import { GiAlarmClock } from "react-icons/gi";

const ReminderButton = () => {
  return (
    <div className="app__btn_wrapper reminder__btn">
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <GiAlarmClock className="icon" />
        </div>
      </div>
    </div>
  );
};

export default ReminderButton;
