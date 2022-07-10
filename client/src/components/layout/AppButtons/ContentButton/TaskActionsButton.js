import React from "react";
import { BsThreeDots } from "react-icons/bs";

const TaskActionsButton = () => {
  return (
    <div className="app__btn_wrapper content__btn task_actions__btn">
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <BsThreeDots className="icon" />
        </div>
      </div>
    </div>
  );
};

export default TaskActionsButton;
