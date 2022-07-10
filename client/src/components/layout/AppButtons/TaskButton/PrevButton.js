import React from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

const PrevButton = props => {
  function handleOnClick() {
    if (props.curWeek && props.isAvailable(props.curWeek)) {
      props.setWeekOffset(-1);
      props.setUpdateCurWeek(true);
    }
  }

  return (
    <div
      className={
        props.curWeek && props.isAvailable(props.curWeek)
          ? "app__btn_wrapper task__btn prev__btn available"
          : "app__btn_wrapper task__btn prev__btn"
      }
    >
      <div className="task__btn_wrapper" onClick={() => handleOnClick()}>
        <div className="btn__icon">
          <MdKeyboardArrowLeft className="icon" />
        </div>
      </div>
    </div>
  );
};

export default PrevButton;
