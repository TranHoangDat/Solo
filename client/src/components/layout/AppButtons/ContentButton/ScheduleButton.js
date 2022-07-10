import React from "react";
import ScheduleIcon from "../../Icons/ScheduleIcon";

const ScheduleButton = () => {
  return (
    <div className="app__btn_wrapper content__btn schedule__btn">
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <ScheduleIcon width={24} />
        </div>
      </div>
    </div>
  );
};

export default ScheduleButton;
