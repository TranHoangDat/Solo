import React from "react";
import ReminderIcon from "../../Icons/ReminderIcon";

const ReminderButton = () => {
  return (
    <div className="app__btn_wrapper content__btn reminder__btn">
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <ReminderIcon width={24} />
        </div>
      </div>
    </div>
  );
};

export default ReminderButton;
