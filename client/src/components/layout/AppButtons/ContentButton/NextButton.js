import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const NextButton = props => {
  function handleOnClick() {
    props.setCurMonth(props.getNextMonth(props.curMonth));
    props.setScrollToMonth(true);
  }

  return (
    <div className="app__btn_wrapper content__btn next__btn available">
      <div className="btn__name_wrapper" onClick={() => handleOnClick()}>
        <div className="btn__icon">
          <MdKeyboardArrowRight className="icon" />
        </div>
      </div>
    </div>
  );
};

export default NextButton;
