import React from "react";

const TodayButton = props => {
  function handleOnClick() {
    props.setValue(props.today);
    props.setScrollToSection(true);
  }

  return (
    <div className="app__btn_wrapper task__btn today__btn">
      <div className="btn__name_wrapper" onClick={() => handleOnClick()}>
        <div className="btn__name">Today</div>
      </div>
    </div>
  );
};

export default TodayButton;
