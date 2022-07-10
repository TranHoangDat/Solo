import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const DeleteButton = (props) => {
  return (
    <div className="app__btn_wrapper content__btn delete__btn" onClick={() => props.handleOnClick()}>
      <div className="btn__name_wrapper">
        <div className="btn__icon">
          <FaRegTrashAlt className="icon" />
        </div>
      </div>
    </div>
  );
};

export default DeleteButton;
