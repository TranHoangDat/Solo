import React from "react";
import moment from "moment";
import { BsCircle } from "react-icons/bs";

const TodayButton = props => {
  const today = moment();

  function handleOnClick() {
    if (!props.scrollOnTop || props.isAvailable(props.value)) {
      props.setValue(today);
      props.setScrollToToday(true);
    }
  }

  return (
    <div
      className={
        !props.scrollOnTop || props.isAvailable(props.value)
          ? "app__btn_wrapper content__btn today__btn available"
          : "app__btn_wrapper content__btn today__btn"
      }
    >
      <div className="btn__name_wrapper" onClick={() => handleOnClick()}>
        <div className="btn__icon">
          <BsCircle className="icon" />
        </div>
      </div>
    </div>
  );
};

export default TodayButton;
