import React from "react";
import AscendingIcon from "../../Icons/AscendingIcon";

const ReverseOrderButton = () => {
  return (
    <div className="app__btn_wrapper content__btn reverse_order__btn">
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <AscendingIcon />
        </div>
      </div>
    </div>
  );
};

export default ReverseOrderButton;
