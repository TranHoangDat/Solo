import React from "react";

const AddButton = props => {
  return (
    <div className="cta__btn add__btn" onClick={() => props.handleOnClick()}>
      {props.btnName}
    </div>
  );
};

export default AddButton;
