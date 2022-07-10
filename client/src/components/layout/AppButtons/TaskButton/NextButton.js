import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const NextButton = props => {
  function handleOnClick() {
    props.setWeekOffset(1);
    props.setUpdateCurWeek(true);
  }

  return (
    <div className="app__btn_wrapper task__btn next__btn available">
      <div className="task__btn_wrapper" onClick={() => handleOnClick()}>
        <div className="btn__icon">
          <MdKeyboardArrowRight className="icon" />
        </div>
      </div>
    </div>
  );
};

export default NextButton;
