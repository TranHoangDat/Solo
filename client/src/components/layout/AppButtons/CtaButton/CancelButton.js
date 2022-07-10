import React from "react";

const CancelButton = props => {
  return (
    <div
      className="cta__btn cancel__btn"
      onMouseDown={e => e.preventDefault()}
      onClick={() => props.handleOnClick()}
    >
      Cancel
    </div>
  );
};

export default CancelButton;
