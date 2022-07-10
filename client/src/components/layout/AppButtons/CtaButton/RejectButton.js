import React from "react";
import AppLabel from "../../AppLabel/AppLabel";
import XIcon from "../../Icons/XIcon";

const RejectButton = (props) => {
  return (
    <div className="app__btn_wrapper">
      <div className="btn__name_wrapper" onClick={() => props.handleOnClick()}>
        <XIcon width={24} />
      </div>
      <AppLabel
        content={"Reject"}
        width={60}
        left={-38}
        top={33}
        arrow={true}
      />
    </div>
  );
};

export default RejectButton;
