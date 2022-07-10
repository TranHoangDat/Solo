import React from "react";
import MarkAsReadIcon from "../../Icons/MarkAsReadIcon";
import AppLabel from "../../AppLabel/AppLabel";

const MarkAsReadButton = () => {
  return (
    <div className="app__btn_wrapper content__btn mark_ar__btn">
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <MarkAsReadIcon />
        </div>
      </div>
      <AppLabel content={"Mark all as Read"} width={120} left={-95} top={32} />
    </div>
  );
};

export default MarkAsReadButton;
