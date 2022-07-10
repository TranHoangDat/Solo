import React, { useState } from "react";

import { MdKeyboardArrowLeft } from "react-icons/md";

const PrevButton = props => {
  function handleOnClick() {
    if (props.isAvailable(props.curMonth)) {
      props.setCurMonth(props.getPreviousMonth(props.curMonth));
      props.setScrollToMonth(true);
    }
  }

  return (
    <div
      className={
        props.isAvailable(props.curMonth)
          ? "app__btn_wrapper content__btn prev__btn available"
          : "app__btn_wrapper content__btn prev__btn"
      }
    >
      <div className="btn__name_wrapper" onClick={() => handleOnClick()}>
        <div className="btn__icon">
          <MdKeyboardArrowLeft className="icon" />
        </div>
      </div>
    </div>
  );
};

export default PrevButton;
