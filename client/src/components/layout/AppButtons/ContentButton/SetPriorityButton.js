import React from "react";
import PriorityIcon from "../../Icons/PriorityIcon";

const SetPriorityButton = props => {
  const value = props.priority;

  return (
    <div className="app__btn_wrapper content__btn set_priority__btn">
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <PriorityIcon priority={props.priority} />
        </div>
      </div>
    </div>
  );
};

export default SetPriorityButton;
